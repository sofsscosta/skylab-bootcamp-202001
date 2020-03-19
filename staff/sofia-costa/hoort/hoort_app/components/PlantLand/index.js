import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, createLand, changeDivisions } from '../../logic'

function PlantLand({ land }) {

    console.log('inside PlantLand = ' + land)
    const [token, setToken] = useState()
    const [divisions, setDivisions] = useState(5)
    const [unit, setUnit] = useState()
    const [scheme, setScheme] = useState(land.scheme)

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             let _token = await isLoggedIn()
    //             if (_token !== null) setToken(_token)
    //             console.log(token)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })()
    // }, [token])

    // useEffect(() => {
    //     setScheme(scheme)
    // }, [unit])

    // useEffect(() => {
    //     setUnit(unit)
    // }, [scheme])

    // async function handleCreateLand() {
    //     try {
    //         await createLand(token, 'first', 'home', 'airy', scheme)
    //         return goToPlantLand()
    //     } catch (error) {
    //         return console.log(error)
    //     }
    // }

    function handleStyleUnit(unitValue) {

        if (divisions === 5) {
            return !unitValue ? styles.unit_min : styles.unit_pressed_min
        }
        else if (divisions === 10) {
            return !unitValue ? styles.unit_medium : styles.unit_pressed_medium
        }
        else if (divisions === 20) {
            return !unitValue ? styles.unit_max : styles.unit_pressed_max
        }
    }

    // function handlePressUnit(unit, item) {
    //     let num = unit.index
    //     setUnit(unit)

    //     element = unit.index

    //     scheme[scheme.indexOf(item)][num] = !unit.item ? true : false
    //     !unit.item ? unit.item = true : unit.item = false
    //     console.log(scheme)
    // }

    return (
        <Fragment>
            <ScrollView
                style={styles.main_container}
                scrollEnabled={false}>
                <FlatList
                    scrollEnabled={false}
                    style={styles.container}
                    data={scheme}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <FlatList
                                scrollEnabled={false}
                                horizontal={true}
                                data={item}
                                keyExtractor={unit => unit.id}
                                renderItem={(unit) => {
                                    return (
                                        <View style={handleStyleUnit(unit.item)} />
                                    )
                                }}
                            />
                        )
                    }} />
            </ScrollView>
        </Fragment>
    )
}

export default PlantLand