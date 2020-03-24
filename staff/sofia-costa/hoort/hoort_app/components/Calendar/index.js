
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
    const [veggiesOnMessage, setVeggiesOnMessage] = useState()



    useEffect(() => {

        (async () => {
            const possibleColors = ["rgb(255, 190, 213)", "rgb(255, 193, 193)",
                "rgb(183, 222, 182)", "rgb(255, 216, 179)", "rgb(255, 239, 200)"]

            let allUserVeggies, color, plantedVeggies = [], usedColors = []
            let markedDatesHere = {}

            try {
                allUserVeggies = await retrieveUserPlantations(token.token)
                allUserVeggies.forEach(veg => {

                    if (veg.estTime) {

                        let findVeggie = plantedVeggies.find(_veg => _veg.veggie === veg.veggie)

                        if (findVeggie) veg.colorId = findVeggie.colorId

                        else {
                            lol(veg)

                            function lol(veg) {
                                color = possibleColors[Math.floor(Math.random() * 5)]
                                if (!usedColors.includes(color)) {
                                    usedColors.push(color)

                                    return veg.colorID = color
                                }
                                else return lol(veg)
                            }
                        }

                        plantedVeggies.push(veg)

                        let minDate = veg.estTime.split('-')[0].split('/')
                        let maxDate = veg.estTime.split('-')[1].split('/')

                        minDate[0].length === 1 ? minDate[0] = '0' + minDate[0] : ''
                        minDate[1].length === 1 ? minDate[1] = '0' + minDate[1] : ''
                        maxDate[0].length === 1 ? maxDate[0] = '0' + maxDate[0] : ''
                        maxDate[1].length === 1 ? maxDate[1] = '0' + maxDate[1] : ''

                        let newMinDate = minDate[2] + '-' + minDate[1] + '-' + minDate[0]

                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").format("YYYY-MM-DD")] = { startingDay: true, color: veg.colorId ? veg.colorId : veg.colorID } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(2, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(2, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(3, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(3, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(4, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(4, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD")] = { selected: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''
                        !markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] ? markedDatesHere[moment(newMinDate, "YYYY-MM-DD").add(6, 'days').format("YYYY-MM-DD")] = { selected: true, endingDay: true, color: veg.colorId ? veg.colorId : veg.colorID, textColor: 'gray' } : ''

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
        let currentMonth = allMonths[month.month - 1]
        setCurrentMonth(currentMonth)
        let toHarvest = []

        try {
            await Promise.all(veggies.map(async veg => {

                let minMonth = veg.estTime.split('-')[0].split('/')[1] - 1
                let maxMonth = veg.estTime.split('-')[1].split('/')[1] - 1

                if (minMonth === month.month - 1 || maxMonth === month - 1) {
                    let veggie = await retrieveItem(veg.veggie)

                    if (!toHarvest.includes(veggie.name)) {

                        toHarvest.push(veggie.name)
                    }
                    return
                }
            }))

            setVeggiesOnMessage(toHarvest)

            // let string = ''

            // for (let veg of toHarvest) {
            //     if (veg !== toHarvest[toHarvest.length - 1] && veg !== toHarvest[toHarvest.length - 2])
            //         string += veg + ', '
            //     else if (veg === toHarvest[toHarvest.length - 2])
            //         string += veg + ' and '
            //     else if (veg === toHarvest[toHarvest.length - 1])
            //         string += veg
            // }
            // return setVeggiesNames(string)

        }
        catch (error) {
            console.log(error)
        }
    }

    function handleGetColor() {

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
                    hideExtraDays={true}
                    onMonthChange={(month) => handleMonthChange(month)}

                    markedDates={markedDates}
                    markingType={'period'} />

                {/* <View styles ={}>
                    < Text >{veggiesNames && currentMonth !== undefined
                        && `You will harvest ${veggiesNames} in ${currentMonth} !`}</Text>
                </View> */}

                <View style={styles.message_container}>
                    <Text styles={styles.message}>{veggiesOnMessage.length !== 0 && `You will harvest `}</Text>
                    {veggiesOnMessage && veggiesOnMessage.map(veg => {

                        if (veg !== veggiesOnMessage[veggiesOnMessage.length - 1]
                            && veg !== veggiesOnMessage[veggiesOnMessage.length - 2])
                            return (<Text style={() => handleGetColor()}>{veg}, </Text>)

                        else if (veg === veggiesOnMessage[veggiesOnMessage.length - 2])
                            return (<><Text style={() => handleGetColor()}>{veg}</Text>
                                <Text> and </Text></>)

                        else if (veg === veggiesOnMessage[veggiesOnMessage.length - 1])
                            return (<Text style={() => handleGetColor()}>{veg}</Text>)

                    })}
                    <Text styles={styles.message}>{veggiesOnMessage.length !== 0 && ` in ${currentMonth} !`}</Text>
                </View>
            </View>
        </ScrollView >
    )
}

export default GetCalendar
