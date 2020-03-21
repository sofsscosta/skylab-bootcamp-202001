import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, retrieveItemForUser, retrieveLand } from '../../logic'
import Feedback from '../Feedback'
import LandsIcons from '../LandsIcons'

function Detail({ item, goToLandDetails }) {

    const [userInfo, setUserInfo] = useState(undefined)
    const [token, setToken] = useState(undefined)
    const [lands, setLands] = useState()
    const [currentLand, setCurrentLand] = useState()

    useEffect(() => {
        (async () => {
            let token = await isLoggedIn()
            setToken(token)
            if (token !== null) {
                try {
                    let userItemDetail = await retrieveItemForUser(token, item.id)
                    setUserInfo(userItemDetail)
                    return console.log('userinfo =  ' + userItemDetail)
                }
                catch (error) {
                    return console.log(error)
                }
            }
        })()
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                let _land = await retrieveLand(token, currentLand)
                console.log('_land')
                console.log(_land)
                return setLand(_land)
            } catch (error) {
                return console.log(error)
            }
        })
    }, [currentLand])


    useEffect(() => {
        ; (async () => {
            let retrievedLands
            let _land
            // console.log('data')
            // console.log(data)
            console.log('userInfo')
            console.log(userInfo[0][1])
            userInfo[0][1].forEach(async land => {
                try {
                    _land = await retrieveLand(land)
                    console.log('_land')
                    console.log(_land)
                    retrievedLands.push(_land)
                } catch (error) {
                    console.log(error)
                }
            })
            return setLands(retrievedLands)
        })()
    }, [token])



    // function handleGetData(data) {
    //     let retrievedLands
    //     let _land
    //     console.log('data')
    //     console.log(data)
    //     data.forEach(async land => {
    //         _land = await retrieveLand(land)
    //         retrievedLands.push(_land)
    //     })
    //     return setLands(retrievedLands)
    // }


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

    // async function handleLand(item) {
    //     let _land
    //     try {
    //         _land = await retrieveLand(token, item)
    //         return setLand(_land)
    //     }
    //     catch (error) {
    //         return console.log(error)
    //     }
    // }

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
                                <Text style={styles.subtitles}>Growth time from our users  </Text><Text style={styles.description}>{`${userInfo[1][1]} days`}</Text>
                            </View>
                            {userInfo[2] && <View
                                style={styles.inline}>
                                <Text style={styles.subtitles}>My average growth time  </Text><Text style={styles.description}>{`${userInfo[2][1]} days`}</Text>
                            </View>}
                            <View style={styles.userVeggie}>
                                <Text style={styles.subtitles}>{`My ${item.name}  `}</Text>
                                <View>
                                    <Text style={styles.userVeggie_description}>
                                        {
                                            userInfo[0][1].length === 0
                                                ? <Feedback level='warning' message={`You haven\'t planted ${item.name} in your lands yet!`} />
                                                : <FlatList
                                                    data={lands}
                                                    keyExtractor={item => item.id}
                                                    renderItem={({ item }) => {
                                                        // console.log('data')
                                                        // console.log(data)
                                                        console.log('item')
                                                        console.log(item)
                                                        return (
                                                            < LandsIcons goToLandDetails={goToLandDetails} land={item} />
                                                        )
                                                    }}
                                                >

                                                </FlatList>
                                        }
                                    </Text>
                                </View>
                            </View>
                        </Fragment>}
                </View>
            </ScrollView>
        </Fragment>
    )
}

export default Detail


// console.log(userInfo)
// console.log('land = ' + landItem)
// console.log(landItem)
// console.log(item)
// let _land

// console.log('land after processing = ')
// console.log(land)
// console.log(_land)
//handleLand(item)//.then(_land => {setLand(_land)})


// setCurrentLand(item)