import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import styles from './style'
import { isLoggedIn, logout } from '../../logic'

function Menu({ goToMyLands, goToMyVeggies, goToCalendar, goToEditProfile, goToSearch, goToSuggestions, goToTutorial, menu }) {

    let notLoggedMenu = [
        { id: 1, title: 'SEARCH', action: () => { return goToSearch() } },
        { id: 2, title: 'WHAT TO PLANT', action: () => { return goToSuggestions() } },
        { id: 3, title: 'TUTORIAL', action: () => { return goToTutorial() } }
    ]

    let loggedMenu = [
        { id: 1, title: 'MY LANDS', action: () => { goToMyLands(); return menu() } },
        { id: 2, title: 'MY VEGGIES', action: () => { goToMyVeggies(); return menu() } },
        { id: 3, title: 'WHAT TO PLANT', action: () => { goToSuggestions(); return menu() } },
        { id: 4, title: 'CALENDAR', action: () => { goToCalendar(); return menu() } },
        { id: 5, title: 'SEARCH', action: () => { goToSearch(); return menu() } },
        { id: 6, title: 'EDIT PROFILE', action: () => { return goToEditProfile() } },
        {
            id: 7, title: 'LOGOUT', action: async () => {
                await logout()
                return menu()
            }
        }
    ]

    const [data, setData] = useState(notLoggedMenu)

    useEffect(() => {
        (async () => {
            let logged = await isLoggedIn()
            logged !== null ? setData(loggedMenu) : setData(notLoggedMenu)
        })()
    }, [])

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