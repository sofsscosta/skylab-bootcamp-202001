import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { retrieveLand } from '../../logic'
import styles from './style'
import LandsIcons from '../LandsIcons'

function CalendarModal({ onBackgroundClick, modalInfo, goToLandDetails }) {

    const [error, setError] = useState()
    const [lands, setLands] = useState()

    console.log(modalInfo.plantations)

    useEffect(() => {
        (async () => {
            try {
                console.log('plantations in modal ', modalInfo.lands)
                let _lands = await Promise.all(modalInfo.lands.map(async _land => {
                    // console.log('land in map in modal ', _land)
                    // console.log('land.length in map in modal ', _land.length)
                    // console.log('land.length does it enter?? ', _land.length !== 0)
                    if (_land !== undefined && _land.length !== 0) {

                        let land = await retrieveLand(_land)
                        console.log('retrieved land in modal in map', land)
                        return land
                    }
                }))

                console.log('does land include an undefined? ', _lands.includes(undefined))
                let filteredLands = _lands.filter(land => { return land !== undefined })

                console.log('lands after all ', filteredLands)

                setLands(filteredLands)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log('lands in modal ', lands)

    return (
        <TouchableWithoutFeedback onPress={() => onBackgroundClick()}>
            <View style={styles.container} >
                <Text style={styles.title}>{`YOUR ${modalInfo.name.toUpperCase()} IN ${modalInfo.month.toUpperCase()}`}</Text>
                <Text style={styles.description}>SCROLL OR CLICK ON LAND</Text>
                <View style={styles.lands_container}>
                    <ScrollView style={{ height: 450, width: 350 }}>
                        <FlatList
                            resizeMode='stretch'
                            data={lands}
                            style={styles.icons}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {

                                return <LandsIcons goToLandDetails={() => goToLandDetails(item)} land={item} />
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