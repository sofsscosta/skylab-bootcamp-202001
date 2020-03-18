import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import styles from './style'
import { isLoggedIn, logout, retrieveUserVeggies, searchSuggested, retrieveUserLands } from '../../logic'

function Menu({ goToMyLands, goToMyVeggies, goToCalendar, goToEditProfile, goToSearch, goToSuggestions, goToTutorial, menu }) {

    let notLoggedMenu, loggedMenu

    const [data, setData] = useState(notLoggedMenu)
    const [token, setToken] = useState(undefined)

    useEffect(() => {
        (async () => {
            let _token = await isLoggedIn()
            if (_token !== null) {
                setToken(_token)
                setData(loggedMenu)
            } else setData(notLoggedMenu)
        })()
    }, [token])

    notLoggedMenu = [
        { id: 1, title: 'SEARCH', action: () => { goToSearch(); return menu() } },
        {
            id: 2, title: 'WHAT TO PLANT', action: async () => {
                let suggestedVeggies

                try {
                    suggestedVeggies = await searchSuggested()
                    goToSuggestions(suggestedVeggies)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        { id: 3, title: 'TUTORIAL', action: () => { goToTutorial(); return menu() } }
    ]

    loggedMenu = [
        {
            id: 1, title: 'MY LANDS', action: async () => {
                let lands
                try {
                    lands = await retrieveUserLands(token)
                    goToMyLands(lands)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        {
            id: 2, title: 'MY VEGGIES', action: async () => {

                let userVeggies

                try {
                    userVeggies = await retrieveUserVeggies(token)
                    goToMyVeggies(userVeggies)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        {
            id: 3, title: 'WHAT TO PLANT', action: async () => {

                let suggestedVeggies
                try {
                    suggestedVeggies = await searchSuggested()
                    goToSuggestions(suggestedVeggies)
                    return menu()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        { id: 4, title: 'CALENDAR', action: () => { goToCalendar(); return menu() } },
        {
            id: 5, title: 'SEARCH', action: () => {
                goToSearch()
                return menu()
            }
        },
        { id: 6, title: 'EDIT PROFILE', action: () => { return goToEditProfile() } },
        {
            id: 7, title: 'LOGOUT', action: async () => {
                await logout()
                return menu()
            }
        }
    ]

    return (
        < Fragment >
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
        </Fragment >
    )
}

export default Menu