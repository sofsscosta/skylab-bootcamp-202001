import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { createLand } from '../../logic'

function CreateLand() {

    return (
        <Fragment>
            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={() => { return createLand() }}>
                        <View style={styles.button_container}>
                            <Text
                                style={styles.button_text}
                            >NEW LAND</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Fragment>
    )
}

export default CreateLand