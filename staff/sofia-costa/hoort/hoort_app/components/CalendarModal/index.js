import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { retrieveLand } from '../../logic'
import styles from './style'
import LandsIcons from '../LandsIcons'

function CalendarModal({ onBackgroundClick, modalInfo, goToLandDetails, token }) {

    const [error, setError] = useState()
    const [lands, setLands] = useState()

    console.log(modalInfo.plantations)

    useEffect(() => {
        (async () => {
            try {
                let _lands = await Promise.all(modalInfo.plantations.map(async plant => {

                    let land = await retrieveLand(token, plant.land)
                    return land
                }))

                setLands(_lands)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log(lands)

    return (
        <TouchableWithoutFeedback onPress={() => onBackgroundClick()}>
            <View style={styles.container} >
                <Text style={styles.title}>{`YOUR ${modalInfo.name.toUpperCase()} IN ${modalInfo.month.toUpperCase()}`}</Text>
                <Text style={styles.description}>SCROLL OR CLICK ON LAND</Text>
                <View style={styles.lands_container}>
                    <ScrollView>
                        <FlatList
                            resizeMode='stretch'
                            data={lands}
                            style={styles.icons}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {

                                return <LandsIcons goToLandDetails={() => goToLandDetails(item, token)} land={item} token={token} />
                            }}>

                        </FlatList>
                    </ScrollView>
                </View>
                <View>
                    <View
                        resizeMode='stretch'
                        style={styles.container_border} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CalendarModal