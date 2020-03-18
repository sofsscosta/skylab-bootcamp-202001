import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { LandsIcons } from '../'
import { isLoggedIn, retrieveLands } from '../../logic'
import newLand from '../../assets/my_lands.png'
import add from '../../assets/add.png'

function Lands({ goToLandDetail, goToCreateLand, lands }) {

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
                <FlatList
                    style={styles.myVeggies_container}
                    data={lands}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        !lands.length
                            ? <Text>You have no lands yet!</Text>
                            : <LandsIcons land={item} key={item.id} goToLandDetail={goToLandDetail} />
                    )} />
            </ScrollView>
        </Fragment>
    )
}

export default Lands