
import React, { useEffect, useState } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { ScrollView, Image, View, Text } from 'react-native'
import { retrieveUserPlantations, retrieveItem } from '../../logic'
import styles from './style'
import moment from 'moment'

function GetCalendar(token) {

    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const [veggies, setVeggies] = useState()
    const [markedDates, setMarkedDates] = useState()
    const [veggiesNames, setVeggiesNames] = useState()
    const [currentMonth, setCurrentMonth] = useState(allMonths[new Date().getMonth()])

    useEffect(() => {

        (async () => {
            const possibleColors = ["rgb(126, 194, 144)", "rgb(252, 114, 114)",
                "rgb(136, 195, 134)", "rgb(255, 177, 104)", "rgb(252, 213, 114)"]

            let allUserVeggies, plantedVeggies = []
            let markedDatesHere = {}
            try {
                allUserVeggies = await retrieveUserPlantations(token.token)
                allUserVeggies.forEach(veg => {

                    if (veg.estTime) {
                        veg.colorId = possibleColors[Math.floor(Math.random() * 5)]

                        plantedVeggies.push(veg)

                        let minDate = veg.estTime.split('-')[0].split('/')
                        let maxDate = veg.estTime.split('-')[1].split('/')

                        minDate[0].length === 1 ? minDate[0] = '0' + minDate[0] : ''
                        minDate[1].length === 1 ? minDate[1] = '0' + minDate[1] : ''
                        maxDate[0].length === 1 ? maxDate[0] = '0' + maxDate[0] : ''
                        maxDate[1].length === 1 ? maxDate[1] = '0' + maxDate[1] : ''

                        let newMinDate = minDate[2] + '-' + minDate[1] + '-' + minDate[0]
                        let newMaxDate = maxDate[2] + '-' + maxDate[1] + '-' + maxDate[0]

                        // let inbetweenDates = [
                        //     moment(newMinDate, "YYYY-MM-DD"),
                        //     moment(newMinDate, "YYYY-MM-DD").add(1, 'days'),
                        //     moment(newMinDate, "YYYY-MM-DD").add(2, 'days'),
                        //     moment(newMinDate, "YYYY-MM-DD").add(3, 'days'),
                        //     moment(newMinDate, "YYYY-MM-DD").add(4, 'days'),
                        //     moment(newMinDate, "YYYY-MM-DD").add(5, 'days'),
                        //     moment(newMinDate, "YYYY-MM-DD").add(6, 'days'),
                        //     moment(newMaxDate, "YYYY-MM-DD")
                        // ]
                        // console.log(inbetweenDates)

                        // if (markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")])
                        //     markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")].periods.push({ selected: true, color: veg.colorId, textColor: 'gray', id: veg.id })

                        // else {
                        //     markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] = {
                        //         periods: [
                        //             { selected: true, color: veg.colorId, textColor: 'gray', id: veg.id }
                        //         ]
                        //     }
                        // }

                        // for (let i = 1; i < 6; i++) {

                        //     if (markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(i, 'days').format("YYYY-MM-DD")])
                        //         // if (markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(i, 'days').format("YYYY-MM-DD")].periods.length)
                        //         markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(i, 'days').format("YYYY-MM-DD")].periods.unshift({ selected: true, color: veg.colorId, textColor: 'gray', id: veg.id })

                        //     else {
                        //         markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(i, 'days').format("YYYY-MM-DD")] = {
                        //             periods: [
                        //                 { selected: true, color: veg.colorId, textColor: 'gray', id: veg.id }
                        //             ]
                        //         }
                        //     }
                        // }

                        // if (markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")])
                        //     markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")].periods.push({ selected: true, endingDay: true, color: veg.colorId, textColor: 'gray', id: veg.id })

                        // else {
                        //     markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] = {
                        //         periods: [
                        //             { selected: true, color: veg.colorId, textColor: 'gray', id: veg.id }
                        //         ]
                        //     }
                        // }

                        // const veggies

                        // markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")] = { startingDay: true, color: veg.colorId }
                        // for (let i = 1; i < 6; i++) {
                        //     markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        // }
                        // markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] = { selected: true, endingDay: true, color: veg.colorId, textColor: 'gray' }

                        // { selected: true, color: veg.colorId, textColor: 'gray' }

                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")] = { startingDay: true, color: veg.colorId }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(2, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(3, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(4, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId, textColor: 'gray' }
                        markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] = { selected: true, endingDay: true, color: veg.colorId, textColor: 'gray' }



                        // {
                        //     periods: [
                        //         { startingDay: false, endingDay: true, color: '#5f9ea0' },
                        //         { startingDay: false, endingDay: true, color: '#ffa500' },
                        //         { startingDay: true, endingDay: false, color: '#f0e68c' }
                        //     ]
                        // }

                        // console.log('markedDatesHere', markedDatesHere)

                        setMarkedDates(markedDatesHere)
                    }
                })
                return setVeggies(plantedVeggies)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    async function handleMonthChange(month) {

        let currentMonth = allMonths[month - 1]
        console.log('currentMonth', currentMonth)
        setCurrentMonth(currentMonth)
        let toHarvest = []


        try {
            await Promise.all(veggies.map(async veg => {

                let minMonth = veg.estTime.split('-')[0].split('/')[1] - 1
                let maxMonth = veg.estTime.split('-')[1].split('/')[1] - 1

                if (minMonth === currentMonth || maxMonth === currentMonth) {
                    let veggie = await retrieveItem(veg.veggie)

                    if (!toHarvest.includes(veggie.name)) toHarvest.push(veggie.name)

                    return
                }
            }))

            let string = ''

            for (let veg of toHarvest) {
                if (veg !== toHarvest[toHarvest.length - 1] && veg !== toHarvest[toHarvest.length - 2])
                    string += veg + ', '
                else if (veg === toHarvest[toHarvest.length - 2])
                    string += veg + ' and '
                else if (veg === toHarvest[toHarvest.length - 1])
                    string += veg
            }
            console.log(string)
            return setVeggiesNames(string)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView>
            <View>

                <Calendar
                    style={{
                        marginTop: 30,
                        height: 400
                    }}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: 'plum',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'rgb(126, 194, 144)',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: 'grey',
                        indicatorColor: 'grey',
                        textDayFontWeight: '300',
                        textMonthFontWeight: '200',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 20,
                        textMonthFontSize: 30,
                        textDayHeaderFontSize: 22,
                    }}

                    monthFormat={'MMM yyyy'}
                    disableMonthChange={true}
                    firstDay={1}
                    onPressArrowLeft={substractMonth => substractMonth()}
                    onPressArrowRight={addMonth => addMonth()}

                    onMonthChange={(month) => handleMonthChange(month)}

                    markedDates={markedDates}
                    markingType={'period'} />
                <Text>{`You will harvest ${veggiesNames} in ${currentMonth} !`}</Text>
            </View>
        </ScrollView>
    )
}

export default GetCalendar
