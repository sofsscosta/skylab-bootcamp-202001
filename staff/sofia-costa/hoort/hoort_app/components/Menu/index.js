import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, Text, View } from 'react-native'
import styles from './style'
import { isLoggedIn, logout, retrieveUserVeggies, searchSuggested, retrieveUserLands } from '../../logic'

function Menu({ goToMyLands, goToMyVeggies, goToCalendar, goToEditProfile, goToSearch, goToSuggestions, goToTutorial, goToLanding, menu }) {

    let notLoggedMenu, loggedMenu

    const [data, setData] = useState(notLoggedMenu)
    const [token, setToken] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        (async () => {
            try {
                setError(undefined)
                let _token = await isLoggedIn()
                if (_token !== null) {
                    setToken(_token)
                    setData(loggedMenu)
                } else setData(notLoggedMenu)
            } catch (error) {
                setError(error)
            }
        })()
    }, [token])

    notLoggedMenu = [
        {
            id: 1, title: 'SEARCH', action: () => {
                setError(undefined)
                goToSearch()
                return menu()
            }
        },
        {
            id: 2, title: 'WHAT TO PLANT', action: async () => {
                let suggestedVeggies

                try {
                    setError(undefined)
                    suggestedVeggies = await searchSuggested()
                    goToSuggestions(suggestedVeggies)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        { id: 3, title: 'TUTORIAL', action: () => { setError(undefined); goToTutorial(); return menu() } }
    ]

    loggedMenu = [
        {
            id: 1, title: 'MY LANDS', action: async () => {
                let _error
                let lands
                try {
                    setError(undefined)
                    lands = await retrieveUserLands(token)
                    if (lands.length === 0) {
                        _error = new Error('You have no lands yet!')
                        throw new Error('You have no lands yet!')
                    }
                    goToMyLands(lands, token)
                    return menu()
                } catch (error) {
                    setError(error)
                    return goToMyLands(lands, token, _error)
                }
            }
        },
        {
            id: 2, title: 'MY VEGGIES', action: async () => {

                let userVeggies

                try {
                    setError(undefined)
                    userVeggies = await retrieveUserVeggies(token)
                    if (userVeggies.length === 0) {
                        throw new Error('You have no veggies in your lands yet!')
                    }
                    goToMyVeggies(userVeggies, error)
                    return menu()
                } catch (error) {
                    setError(error.message)
                    return goToMyVeggies(userVeggies, error)
                }
            }
        },
        {
            id: 3, title: 'WHAT TO PLANT', action: async () => {

                let suggestedVeggies
                try {
                    setError(undefined)
                    suggestedVeggies = await searchSuggested()
                    goToSuggestions(suggestedVeggies)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        { id: 4, title: 'CALENDAR', action: () => { setError(undefined); goToCalendar(token); return menu() } },
        {
            id: 5, title: 'SEARCH', action: () => {
                setError(undefined)
                goToSearch()
                return menu()
            }
        },
        { id: 6, title: 'EDIT PROFILE', action: () => { setError(undefined); return goToEditProfile() } },
        {
            id: 7, title: 'LOGOUT', action: async () => {
                setError(undefined)
                await logout()
                goToLanding()
                return menu()
            }
        }
    ]

    return (
        < Fragment >
            <TouchableWithoutFeedback style={{ height: '100%', width: '100%' }} onPress={() => menu()}>
                <FlatList
                    style={styles.container__all}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.container}
                            key={item.id}
                            title={item.title}
                            onPress={() => item.action()}>
                            <View>
                                <Text style={styles.options}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </TouchableWithoutFeedback>
        </Fragment >
    )
}

export default Menu