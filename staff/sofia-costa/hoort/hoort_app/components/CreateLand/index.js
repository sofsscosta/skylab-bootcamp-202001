import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, createLand } from '../../logic'

function CreateLand() {

    const [token, setToken] = useState()
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
        setScheme(scheme)
    }, [unit])


    async function handleCreateLand() {
        try {
            await createLand(token, 'first', 'home', 'airy', scheme)
        } catch (error) {
            console.log(error)
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
                                            style={!unit.item ? styles.unit : styles.unit_pressed}
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
                <TouchableOpacity
                    onPress={() => handleCreateLand()}>
                    <View style={styles.button_container}>
                        <Text
                            style={styles.button_text}
                        >Create Land</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </Fragment>
    )
}

export default CreateLand