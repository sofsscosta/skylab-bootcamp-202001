import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { searchItems } from '../../logic'
import { Item } from '../'

function Search({ isSuggestions }) {

    const [results, setResults] = useState()
    const [query, setQuery] = useState()

    async function search(query) {

        try {
            let result = await searchItems(query)
            setResults(result)
            console.log(result)
            return result
        }
        catch (error) {
            console.log('error message here')
            const { message } = error
            console.log(message)
        }
    }

    return (
        <Fragment>
            <ScrollView style={styles.main_container}>
                <View style={styles.query_container}>
                    <Image
                        source={require('../../assets/query_icon.png')}
                        style={styles.query_icon}
                        resizeMode="contain" />
                    <View>
                        <TextInput
                            style={styles.query}
                            title='query'
                            placeholder='search here'
                            onSubmitEditing={async () => { return await search(query) }}
                            onChangeText={(query) => setQuery(query)} />
                        <TouchableOpacity
                            onPress={async () => { return await search(query) }} >
                            <Image
                                source={require('../../assets/query_line.png')}
                                style={styles.query_line}
                                resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={styles.results_container}
                    data={results}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Item item={item} />
                    )}
                />
            </ScrollView>

        </Fragment>
    )
}

export default Search