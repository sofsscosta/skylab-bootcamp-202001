import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView, PanResponder, PanResponderInstance, Animated } from 'react-native'
import styles from './style'
import { retrieveAll } from '../../logic'
import plant_now from '../../assets/plant_now.png'
import change_veggie from '../../assets/change_veggie.png'
import land_with_text from '../../assets/land-with-text.png'
import land_border from '../../assets/land_border.png'

function PlantLand({ land }) {

    const [divisions, setDivisions] = useState(5)
    const [scheme, setScheme] = useState(land.scheme)
    const [menu, setMenu] = useState(false)
    const [veggies, setVeggies] = useState()
    const [veggie, setVeggie] = useState(undefined)

    const images = {
        tomatoes: require('../../assets/tomatoes.png'),
        potatoes: require('../../assets/potatoes.png'),
        carrots: require('../../assets/carrots.png'),
        strawberries: require('../../assets/strawberries.png'),
        spinach: require('../../assets/spinach.png')
    }

    this._panResponder = PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            // The gesture has started. Show visual feedback so the user knows
            // what is happening!
            // gestureState.d{x,y} will be set to zero now
        },
        onPanResponderMove: (evt, gestureState) => {
            // The most recent move distance is gestureState.move{X,Y}
            // The accumulated gesture distance since becoming responder is
            // gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            // The user has released all touches while this view is the
            // responder. This typically means a gesture has succeeded
        },
        onPanResponderTerminate: (evt, gestureState) => {
            // Another component has become the responder, so this gesture
            // should be cancelled
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
        },
    });

    ; (async function retrieveVeggies() {
        let veggies
        try {
            veggies = await retrieveAll()
            setVeggies(veggies)
        } catch (error) {
            console.log(error)
        }
    })()

    async function handlePlantMenu() {
        return !menu ? setMenu(true) : setMenu(false)
    }


    function handleStyleUnit(unitValue) {

        if (divisions === 5) {
            return !unitValue ? styles.unit_min : styles.unit_pressed_min
        }
        else if (divisions === 10) {
            return !unitValue ? styles.unit_medium : styles.unit_pressed_medium
        }
        else if (divisions === 20) {
            return !unitValue ? styles.unit_max : styles.unit_pressed_max
        }
    }

    function handleSelectItem(veggie) {
        handlePlantMenu()
        return setVeggie(veggie)
    }

    return (
        <Fragment>
            <ScrollView
                style={styles.main_container}
                scrollEnabled={false}>
                <FlatList
                    scrollEnabled={false}
                    style={styles.container}
                    data={scheme}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <FlatList
                                scrollEnabled={false}
                                horizontal={true}
                                data={item}
                                keyExtractor={unit => unit.id}
                                renderItem={(unit) => {
                                    return (
                                        <View style={handleStyleUnit(unit.item)} />
                                    )
                                }}
                            />
                        )
                    }} />
                <View style={styles.buttons_container}>
                    <View>
                        <Image
                            style={styles.button}
                            resizeMode='contain'
                            source={plant_now}
                        ></Image>
                        <Image
                            style={styles.button}
                            resizeMode='contain'
                            source={change_veggie}
                        ></Image>
                    </View>
                    <View style={styles.menu_icon_container}>

                        <View
                            style={menu ? styles.menu_container : styles.menu_container_hidden}>
                            <Image
                                source={styles.land_border}
                                style={styles.menu_border} />
                            <FlatList
                                style={styles.menu}
                                data={veggies}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handleSelectItem({ item })}
                                            style={styles.menu_veggie}>
                                            <Image
                                                style={styles.menu_image}
                                                resizeMode='contain'
                                                source={images[`${item.name}`]}></Image>
                                            <Text style={styles.menu_item_name}>{item.name.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            ></FlatList>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                if (!veggie) {
                                    return handlePlantMenu()
                                }
                                else {
                                    return handlePlantMenu()
                                }
                            }}>
                            <Animated.Image
                                style={styles.button_plant}
                                resizeMode='contain'
                                source={!veggie.item.name ? land_with_text : images[`${veggie.item.name}`]}
                            ></Animated.Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Fragment >
    )
}

export default PlantLand