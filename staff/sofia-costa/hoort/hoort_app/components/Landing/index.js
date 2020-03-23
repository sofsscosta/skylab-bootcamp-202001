import React, { Fragment } from 'react';
import { View, Text, StatusBar, Button, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { retrieveUserLands } from '../../logic'

const Landing = ({ goToRegister, goToMyLands, token }) => {

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
