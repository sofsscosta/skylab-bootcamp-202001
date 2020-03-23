import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Button, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { retrieveUserLands, isLoggedIn } from '../../logic'

const Landing = ({ goToRegister, goToMyLands }) => {

    const [token, setToken] = useState()

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                console.log('token from useeffect in app', _token)
                if (_token !== null) return setToken(_token)
            } catch (error) {
                return console.log('token error in app = ', error)
            }
        })()
    }, [])

    return (
        <Fragment>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    return token
                        && (async () => {
                            let lands
                            try {
                                lands = await retrieveUserLands(token)
                                goToMyLands(lands, token)
                                return menu()
                            } catch (error) {
                                console.log(error)
                            }
                        })()
                        || goToRegister()
                }}>
                    <Image
                        style={styles.landing}
                        source={require('../../assets/landing.png')}
                        resizeMode="contain"></Image>
                </TouchableOpacity>
                <Text style={styles.title}>LET'S PLANT?</Text>
            </View>
        </Fragment>
    );
};

export default Landing
