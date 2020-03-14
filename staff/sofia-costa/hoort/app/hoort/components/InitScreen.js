import React, { Fragment } from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/landing'

const Landing = ({ start }) => {

    return (
        <Fragment>
            <View style={styles.container} onclick={start()}>
                <Image
                    style={styles.landing}
                    source={require('../assets/logo.png')}
                    resizeMode="contain">
                </Image>
                <Image
                    style={styles.landing}
                    source={require('../assets/icon.png')}
                    resizeMode="contain">
                </Image>
            </View>
        </Fragment>
    );
};

export default Landing
