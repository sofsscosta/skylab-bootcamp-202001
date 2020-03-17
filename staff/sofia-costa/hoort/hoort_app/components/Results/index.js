import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { Item } from '../'

function Results({ results, goToDetail }) {
    return (
        <Fragment>
            <FlatList
                style={styles.results_container}
                data={results}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) => (
                    <Item item={item} key={item._id.toString()} goToDetail={goToDetail} />
                )} />
        </Fragment>
    )
}

export default Results