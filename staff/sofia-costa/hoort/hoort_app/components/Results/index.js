import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { Item } from '../'

function Results({ results, goToDetail, resultsType }) {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let monthNum = new Date().getMonth()
    let month = months[monthNum]

    console.log(results)

    return (
        <Fragment>
            {resultsType === 'myVeggies' && <Text style={styles.title}>My Veggies</Text>}
            {resultsType === 'suggested' && <Text style={styles.month_title}>{`What to plant in ${month}`}</Text>}
            <FlatList
                style={resultsType && styles.myVeggies_container || styles.results_container}
                data={results}
                keyExtractor={item => item._id ? item._id.toString() : item.id}
                renderItem={({ item }) => (
                    <Item item={item} key={item._id ? item._id.toString() : item.id} goToDetail={goToDetail} />
                )} />
        </Fragment>
    )
}

export default Results