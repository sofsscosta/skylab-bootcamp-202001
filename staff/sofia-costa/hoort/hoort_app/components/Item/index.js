import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import results_background from '../../assets/result_item.png'

function Item({ item }) {

    const images = {
        tomatoes: require('../../assets/tomatoes.png'),
        potatoes: require('../../assets/potatoes.png'),
        carrots: require('../../assets/carrots.png'),
        strawberries: require('../../assets/strawberries.png'),
        spinach: require('../../assets/spinach.png')
    }

    return (
        <TouchableOpacity
            //style={styles.container}
            key={item.id}
            title={item.name}
            onPress={item.action}>
            <Image
                style={styles.background}
                source={results_background}
                resizeMode='contain'
            />
            <View
                style={styles.container_items}>
                <Image
                    style={styles.image}
                    source={images[`${item.name}`]}
                    resizeMode='contain'
                />
                <Text style={styles.title}>{item.name.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item