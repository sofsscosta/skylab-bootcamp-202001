import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { LandsIcons, Feedback } from '../'
import { isLoggedIn, retrieveLands, retrieveLand } from '../../logic'
import newLand from '../../assets/my_lands.png'
import add from '../../assets/add.png'

function Lands({ goToLandDetail, goToCreateLand, lands, token }) {

    async function handlegoToLandDetail(land) {
        try {
            let _land = await retrieveLand(token, land.id)
            console.log('_land', _land)
            return goToLandDetail(_land, token)
        }
        catch (error) {
            return console.log(error)
        }
    }

    return (
        <Fragment>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>My Lands</Text>
                <View>
                    <TouchableOpacity
                        onPress={() => { return goToCreateLand() }}>
                        <Image
                            source={newLand}
                            style={styles.button}
                            resizeMode='contain'
                        ></Image>
                        <View style={styles.button_container}>
                            <Text
                                style={styles.button_text}
                            >NEW LAND</Text>
                            <Image
                                source={add}
                                style={styles.add}
                                resizeMode='contain'
                            ></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                {lands &&
                    <FlatList
                        style={styles.myVeggies_container}
                        data={lands}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <LandsIcons land={item} key={item.id} goToLandDetails={() => handlegoToLandDetail(item)} />
                        )} />
                    || <Feedback level='warning' message='You have no lands yet!' />
                }
            </ScrollView>
        </Fragment>
    )
}

export default Lands