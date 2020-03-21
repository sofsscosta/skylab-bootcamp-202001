import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { searchItems } from '../../logic'
import { Results } from '../'
import Feedback from '../Feedback'

function Search({ isSuggestions, goToDetail }) {

    const [results, setResults] = useState()
    const [query, setQuery] = useState()
    const [error, setError] = useState(undefined)

    async function search(query) {

        try {
            setError(undefined)
            let result = await searchItems(query)
            setResults(result)
        }
        catch (error) {
            setError(error.message)
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
                {error
                    ? <View style={styles.feedback}>
                        <Feedback level='warning' message={error} />
                    </View>
                    : results &&
                    <Results results={results} goToDetail={goToDetail} />}
            </ScrollView>
        </Fragment>
    )
}

export default Search