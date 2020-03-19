import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, retrieveLands } from '../../logic'
import landBorder from '../../assets/land_border.png'

function LandsIcons({ goToLandDetail, land }) {

    function handleStyleUnit(unit) {
        // console.log(unit)
        // for (let i = land.scheme.length - 1; i > 1; i++) {
        //     console.log('arrived')
        //     let line = land.scheme[i]
        //     // console.log(line)
        //     if (line.includes(true)) styles.container.height -= styles.unit_pressed_min.height
        // }
        if (land.scheme.length === 5)
            return unit ? styles.unit_pressed_min : styles.unit_min

        else if (land.scheme.length === 10)
            return unit ? styles.unit_pressed_medium : styles.unit_medium

        else if (land.scheme.length === 20) {
            return unit ? styles.unit_pressed_max : styles.unit_max
        }
    }

    return (
        <Fragment>
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => goToLandDetail(land.id)}>
                <Image
                    source={landBorder}
                    style={styles.land_border}
                    resizeMode='stretch'
                ></Image>
                <FlatList
                    scrollEnabled={false}
                    style={styles.container}
                    data={land.scheme}
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
                <Text style={styles.name}>{land.name.charAt(0).toUpperCase().concat(land.name.slice(1))}</Text>
            </TouchableOpacity>
        </Fragment>
    )
}

export default LandsIcons