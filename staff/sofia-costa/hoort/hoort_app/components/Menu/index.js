import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, List, TouchableOpacity, Text, View } from 'react-native'
import styles from './style'
import { isLoggedIn } from '../../logic'

function Menu({ goToMyLands, goToMyVeggies, goToCalendar, goToEditProfile, goToSearch, goToSuggestions, goToTutorial }) {

    let notLoggedMenu = [
        { id: 1, title: 'SEARCH', action: () => { return goToSearch() } },
        { id: 2, title: 'WHAT TO PLANT', action: () => { return goToSuggestions() } },
        { id: 3, title: 'TUTORIAL', action: () => { return goToTutorial() } }
    ]
    let loggedMenu = [
        { id: 1, title: 'MY LANDS', action: () => { return goToMyLands() } },
        { id: 2, title: 'MY VEGGIES', action: () => { return goToMyVeggies() } },
        { id: 3, title: 'WHAT TO PLANT', action: () => { return goToSuggestions() } },
        { id: 4, title: 'CALENDAR', action: () => { return goToCalendar() } },
        { id: 5, title: 'SEARCH', action: () => { return goToSearch() } },
        { id: 6, title: 'EDIT PROFILE', action: () => { return goToEditProfile() } },
    ]

    const [data, setData] = useState(notLoggedMenu)

    useEffect(() => {
        isLoggedIn() ? setData(loggedMenu) : setData(notLoggedMenu)
    })

    return (
        <Fragment>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.container}

                        key={item.id}
                        title={item.title}
                        onPress={item.action()}>
                        <View>
                            <Text style={styles.options}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </Fragment>
    )
}

export default Menu