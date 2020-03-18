import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, retrieveLands } from '../../logic'
import landBorder from '../../assets/land_border.png'

function LandsIcons({ goToLandDetail, land }) {

    return (
        <Fragment>
            <TouchableOpacity
                style={styles.container}
                onPress={() => goToLandDetail()}>
                <Image
                    source={landBorder}
                    style={styles.land_border}
                    resizeMode='contain'
                ></Image>
                <Text style={styles.land}>{land.id}</Text>
            </TouchableOpacity>
        </Fragment>
    )
}

export default LandsIcons