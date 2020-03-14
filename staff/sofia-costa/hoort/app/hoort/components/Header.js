import React, { Fragment } from 'react';
import { View, StatusBar, Image } from 'react-native';
import styles from '../styles/header'

const Header = () => {

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <View>
                <Image
                    style={styles.header}
                    source={require('../assets/header.png')}
                    resizeMode="stretch"
                />
                <View style={styles.header__container}>
                    <Image
                        style={styles.menu}
                        source={require('../assets/menu.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={styles.icon}
                        source={require('../assets/icon.png')}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </Fragment>
    )
}

export default Header