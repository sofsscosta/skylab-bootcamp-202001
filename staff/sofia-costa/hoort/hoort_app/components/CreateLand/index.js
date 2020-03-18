import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { createLand } from '../../logic'

function CreateLand() {

    const [scheme, setScheme] = useState([
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ])

    return (
        <Fragment>
            <ScrollView style={styles._container}>
                <FlatList
                    style={styles.container}
                    data={scheme}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <FlatList
                                horizontal={true}
                                data={item}
                                keyExtractor={unit => unit.id}
                                renderItem={({ unit }) => {
                                    return (
                                        <TouchableOpacity>
                                            <View style={styles.unit} />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        )
                        // item.map(unit => {
                        //     console.log(unit)
                        //     return (
                        //         <Text style={styles.unit}>{`${unit}`}</Text>
                        //         // <View style={styles.unit} position={`${item}`} key={`${item}`} />
                        //     )
                        // })

                        // <View
                        //     style={styles.line}>
                        //     {item.map((unit, index) => {
                        //         //console.log(`${scheme.indexOf(item)}${index}`)
                        //         console.log('arrived')
                        //         return (
                        //             <View style={styles.unit} position={`${scheme.indexOf(item)}${index}`} key={`${scheme.indexOf(item)}${index}`} />
                        //         )
                        //     })}
                        // </View>

                        // <FlatList
                        //     style={styles.line}
                        //     data={item}
                        //     keyExtractor={unit => unit.id}
                        //     renderItem={({ unit }) => {
                        //         console.log(item)
                        //         console.log(unit)
                        //         return (
                        //             <View style={styles.unit} position={`${item.indexOf(unit)}${index}`} key={`${item.indexOf(unit)}${index}`} />
                        //         )
                        //     }}
                        // />
                    }} />
                <TouchableOpacity
                    onPress={() => { return createLand() }}>
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