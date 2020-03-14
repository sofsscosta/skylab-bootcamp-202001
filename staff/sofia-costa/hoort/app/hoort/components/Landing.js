import React, { Fragment } from 'react';
import { View, Text, StatusBar, Button, Image } from 'react-native';
import styles from '../styles/landing'

const Landing = () => {

    return (
        <Fragment>
            <View style={styles.container}>
                <Image
                    style={styles.landing}
                    source={require('../assets/landing.png')}
                    resizeMode="contain"></Image>
                <Text style={styles.title}>LET'S PLANT?</Text>
            </View>
        </Fragment>
    );
};

export default Landing
