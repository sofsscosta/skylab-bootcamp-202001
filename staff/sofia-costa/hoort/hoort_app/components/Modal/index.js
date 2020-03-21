import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { retrieveItem } from '../../logic'
import styles from './style'
import modal_border from '../../assets/modal_border.png'
import button from '../../assets/divisions.png'

function Modal({ onBackgroundClick, veggie }) {

    const [currentVeggie, setCurrentVeggie] = useState(veggie)

    useEffect(() => {
        (async () => {
            let veg
            try {
                veg = await retrieveItem(veggie.item.id)
                return setCurrentVeggie(veg)
            } catch (error) {
                return console.log(error)
            }
        })()
    }, [currentVeggie])

    return (
        <TouchableWithoutFeedback
            onPress={onBackgroundClick}>
            <View style={styles.container} >
                <Text style={styles.title}>{currentVeggie.name.toUpperCase()}</Text>
                <Image
                    source={button}
                    style={styles.button}
                    resizeMode='stretch'
                ></Image>
                <Image
                    source={modal_border}
                    resizeMode='stretch'
                    style={styles.container_border} />
                <Text style={styles.state}>PLANTED!</Text>
                <View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Modal