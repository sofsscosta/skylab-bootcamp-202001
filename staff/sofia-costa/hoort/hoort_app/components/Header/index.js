import React, { Fragment, useState, useEffect } from 'react';
import { View, StatusBar, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { isLoggedIn } from '../../logic';

const Header = ({ goToLanding, goToMyLands, goToMyVeggies, menuClick }) => {

    const [token, setToken] = useState(undefined)

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                if (_token !== null) setToken(_token)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [token])

    async function handleGoToMyVeggies() {
        try {
            let userVeggies = await retrieveUserVeggies(token)
            goToMyVeggies(userVeggies)
            return menu()
        } catch (error) {
            console.log(error)
        }
    }

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
                    <TouchableOpacity style={styles.icon} onPress={() => token ? handleGoToMyVeggies() : goToLanding()}>
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