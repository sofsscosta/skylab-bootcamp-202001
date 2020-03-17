import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, retrieveItemForUser } from '../../logic'

function Detail({ item }) {

    const [userInfo, setUserInfo] = useState(false)

    const images = {
        tomatoes: require('../../assets/tomatoes.png'),
        potatoes: require('../../assets/potatoes.png'),
        carrots: require('../../assets/carrots.png'),
        strawberries: require('../../assets/strawberries.png'),
        spinach: require('../../assets/spinach.png')
    }

    let bestPeriod = []

    item.bestPeriod.split(' ').map(_month => {
        let month = ''
        for (let i = 0; i < _month.length; i++) {
            if (i === 0) {
                month += _month[i].toUpperCase()
            }
            else month += _month[i]
        }
        bestPeriod.push(month)
    })

    bestPeriod = bestPeriod.join(' ')

    useEffect(() => {

        (async () => {
            let token = await isLoggedIn()
            if (token !== null) {
                let userItemDetail = await retrieveItemForUser(token, item.id)
                setUserInfo(userItemDetail)
                console.log(userInfo.map(info => info[1]))
                console.log(userInfo[0][1].length === 0)
            }
        })()
    }, [])

    return (
        <Fragment>
            <View style={styles.title_container}>
                <Text style={styles.title}>{item.name.toUpperCase()}</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={images[`${item.name}`]}
                        resizeMode='contain'
                    />
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Type  </Text><Text style={styles.description}>{item.subtype}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Growth  </Text><Text style={styles.description}>{item.growth}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Growth duration (from seed)  </Text><Text style={styles.description}>{`${item.growthDuration} days`}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Best type of soil  </Text><Text style={styles.description}>{item.soil}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Ideal growth temperature  </Text><Text style={styles.description}>{`${item.temperature}ºC`}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Light preference  </Text><Text style={styles.description}>{item.lightPreference}</Text>
                    </View>
                    <View
                        style={styles.inline}>
                        <Text style={styles.subtitles}>Best months to plant  </Text><Text style={styles.description}>{`${bestPeriod}`}</Text>
                    </View>
                    {userInfo &&
                        <Fragment>
                            <View
                                style={styles.inline}>
                                <Text style={styles.subtitles}>Growth from our users  </Text><Text style={styles.description}>{`${userInfo[1][1]} days`}</Text>
                            </View>
                            {userInfo[2] && <View
                                style={styles.inline}>
                                <Text style={styles.subtitles}></Text><Text style={styles.description}>{userInfo[2][1]}</Text>
                            </View>}
                            <View style={styles.userVeggie}>
                                <Text style={styles.subtitles}>{`My ${item.name}  `}</Text>
                                <Text style={styles.userVeggie_description}>{userInfo[0][1].length !== 0 ? userInfo[0][1] : `You haven\'t planted ${item.name} in your lands yet!`}</Text>
                            </View>
                        </Fragment>}
                </View>
            </ScrollView>
        </Fragment>
    )
}

export default Detail