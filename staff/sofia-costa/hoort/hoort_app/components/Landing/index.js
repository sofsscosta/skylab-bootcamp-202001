import React, { Fragment } from 'react';
import { View, Text, StatusBar, Button, Image, TouchableOpacity } from 'react-native';
import styles from './style'

const Landing = ({ goToRegister }) => {

    return (
        <Fragment>
            <View style={styles.container}>
                <TouchableOpacity onPress={event => {
                    return goToRegister()
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
