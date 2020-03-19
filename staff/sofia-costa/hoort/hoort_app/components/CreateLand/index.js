import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, createLand, changeDivisions } from '../../logic'
// import { ChangeDivisions } from '../'
import divisions_img from '../../assets/divisions_text.png'

function CreateLand({ goToPlantLand }) {

    const [token, setToken] = useState()
    const [divisions, setDivisions] = useState(5)
    const [unit, setUnit] = useState()
    const [scheme, setScheme] = useState([
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ])

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                if (_token !== null) setToken(_token)
                console.log(token)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [token])


    useEffect(() => {
        debugger
        setScheme(scheme)
    }, [unit])

    useEffect(() => {
        debugger
        setUnit(unit)
    }, [scheme])

    async function handleCreateLand() {
        try {
            await createLand(token, 'first', 'home', 'airy', scheme)
            return goToPlantLand()
        } catch (error) {
            console.log(error)
        }
    }

    async function handleChangeDivisions(operation) {
        let _scheme
        try {
            _scheme = await changeDivisions(operation, scheme)
        } catch (error) {
            return console.log(error)
        }
        setDivisions(_scheme.length)
        return setScheme(_scheme)
    }

    function handleStyleUnit(unitValue) {
        console.log(divisions)
        debugger
        if (divisions === 5) {
            console.log('unit_min.height = ' + styles.unit_min.height)
            return !unitValue ? styles.unit_min : styles.unit_pressed_min
        }
        else if (divisions === 10) {
            console.log('unit_medium.height = ' + styles.unit_medium.height)
            return !unitValue ? styles.unit_medium : styles.unit_pressed_medium
        }
        else if (divisions === 20) {
            console.log('unit_max.height = ' + styles.unit_max.height)
            return !unitValue ? styles.unit_max : styles.unit_pressed_max
        }
    }

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
                                        <TouchableOpacity
                                            style={handleStyleUnit(unit.item)}
                                            onPress={() => {
                                                let num = unit.index
                                                setUnit(unit)

                                                element = unit.index

                                                scheme[scheme.indexOf(item)][num] = !unit.item ? true : false
                                                !unit.item ? unit.item = true : unit.item = false
                                                console.log(scheme)
                                            }}
                                        />
                                    )
                                }}
                            />
                        )
                    }} />
                <View style={styles.divisions_container}>
                    <TouchableOpacity
                        style={styles.less}
                        onPress={() => {
                            return handleChangeDivisions('-')
                        }} />
                    <Image
                        style={styles.divisions}
                        resizeMode='contain'
                        source={divisions_img} />
                    <TouchableOpacity
                        style={styles.more}
                        onPress={() => handleChangeDivisions('+')} />
                </View>
                {/* <ChangeDivisions currentScheme={scheme} updateDivisions={handleChangeDivisions} /> */}
            </ScrollView>
            <TouchableOpacity
                style={styles.button_container}
                onPress={async () => {
                    await handleCreateLand()
                    return goToPlantLand()
                }}>
                <Text style={styles.button_text}>NEXT</Text>
            </TouchableOpacity>
        </Fragment>
    )
}

export default CreateLand