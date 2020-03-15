import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function Button(props) {

    return (
        <TouchableOpacity style={styles[props.type]} onPress={props.onPress}>
            <Text style={styles[props.text]}>{props.text}</Text>
        </TouchableOpacity>
    )
}
