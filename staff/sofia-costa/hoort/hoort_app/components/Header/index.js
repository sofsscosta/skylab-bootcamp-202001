import React, { Fragment } from 'react';
import { View, StatusBar, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { logout } from '../../logic';

const Header = ({ goToLanding, goToMyLands, menuClick }) => {

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <View>
                <Image
                    style={styles.header}
                    source={require('../../assets/header.png')}
                    resizeMode="stretch"
                />
                <View style={styles.header__container}>
                    <TouchableOpacity style={styles.menu} onPress={() => { menuClick() }}>
                        <Image
                            style={styles.menu}
                            source={require('../../assets/menu.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo} onPress={() => { goToLanding() }}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/logo.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => { logout() }}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/icon.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    )
}

export default Header