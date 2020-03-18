import React, { Fragment } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

function Feedback(props) {
    console.log(typeof props.message)

    return (
        <View style={styles[props.level]}>
            <Text style={styles.text}>{props.message}</Text>
        </View>
    )
}

export default Feedback