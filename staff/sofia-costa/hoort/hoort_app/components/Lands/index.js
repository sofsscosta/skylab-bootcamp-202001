import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import styles from './style'
import { LandsIcons, Feedback } from '../'
import { isLoggedIn, retrieveLands, retrieveLand } from '../../logic'
import newLand from '../../assets/my_lands.png'
import add from '../../assets/add.png'

function Lands({ goToLandDetail, goToCreateLand, lands, _error, token }) {

    console.log(_error, '_error in lands')

    const [error, setError] = useState(_error ? _error.message : '')

    async function handlegoToLandDetail(land) {
        try {
            let _land = await retrieveLand(token, land.id)
            return goToLandDetail(_land, token)
        }
        catch (error) {
            console.log(error)
            return setError(error.message)
        }
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setError(undefined)}>
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
                    {error &&
                        <Feedback level='warning' message={error} />
                        ||
                        <FlatList
                            style={styles.myVeggies_container}
                            data={lands}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <LandsIcons land={item} key={item.id} goToLandDetails={() => handlegoToLandDetail(item)} />
                            )} />
                    }
                </ScrollView>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Lands