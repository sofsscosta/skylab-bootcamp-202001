import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import styles from './style'
import { retrieveAll, plantInLand, isLoggedIn, updateLandAddVeggie, retrieveItem, retrieveLand } from '../../logic'
import plant_now from '../../assets/plant_now.png'
import change_veggie from '../../assets/change_veggie.png'
import land_with_text from '../../assets/land-with-text.png'
import land_border from '../../assets/land_border.png'

function PlantLand({ land, onClickVeggie }) {

    const [token, setToken] = useState(undefined)
    const [currentLand, setCurrentLand] = useState(land)
    const [scheme, setScheme] = useState(land.scheme)
    const [menu, setMenu] = useState(false)
    const [veggies, setVeggies] = useState()
    const [veggie, setVeggie] = useState(undefined)
    const [pressed, setPressed] = useState(false)
    const [unitPressed, setUnitPressed] = useState(undefined)
    const [pressedVeggie, setPressedVeggie] = useState()
    const [pressedVeggieType, setPressedVeggieType] = useState()
    const [clickOnSameVeggie, setClickOnSameVeggie] = useState(false)

    const images = {
        tomatoes: require('../../assets/tomatoes.png'),
        potatoes: require('../../assets/potatoes.png'),
        carrots: require('../../assets/carrots.png'),
        strawberries: require('../../assets/strawberries.png'),
        spinach: require('../../assets/spinach.png')
    }

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                if (_token !== null) return setToken(_token)
            } catch (error) {
                return console.log('token error in plantland = ', error)
            }
        })()
    }, [token])

    useEffect(() => {
        ; (async function retrieveVeggies() {
            let veggies
            try {
                veggies = await retrieveAll()
                return setVeggies(veggies)
            } catch (error) {
                return console.log('first error = ' + error)
            }
        })()
    }, [])

    useEffect(() => {
        ; (async () => {
            let updatedLand
            let _scheme = currentLand.scheme
            try {
                _scheme[unitPressed.item][unitPressed.unit.index] = veggie.item.id
                updatedLand = await plantInLand(land.id, _scheme, token)
                await updateLandAddVeggie(land.id, veggie.item.id, token)
                return setCurrentLand(updatedLand)
            } catch (error) {
                return console.log('error = ' + error)
            }
        })()
    }, [unitPressed])

    useEffect(() => {

        (async () => {
            try {
                setClickOnSameVeggie(false)
                let _land = await retrieveLand(token, currentLand.id)
                setCurrentLand(_land)
                let plantations = _land.plantation
                let plantation = plantations.find(plant => plant.veggie.toString() === pressedVeggie)

                if (!plantation.from && !plantation.to) return setPressedVeggieType('notPlanted')
                else if (plantation.from && !plantation.to) return setPressedVeggieType('planted')
                else if (plantation.from && plantation.to) return setPressedVeggieType('harvested')
                else if (!plantation.from && plantation.to) throw new Error('something went wrong!')
            }
            catch (error) {
                console.log('pressedveggie error', error)
            }
        })()

    }, [pressedVeggie, clickOnSameVeggie])

    useEffect(() => {
        (async () => {
            try {
                const veg = await retrieveItem(pressedVeggie)
                return await onClickVeggie(veg, pressedVeggieType, token)
                // setPressedVeggieType(undefined)
            }
            catch (error) {
                return console.log(error)
            }
        })()
    }, [pressedVeggie,
        pressedVeggieType,
        clickOnSameVeggie])


    function handleUnitPressed(itemIndexInScheme, unit) {
        return setUnitPressed({ item: itemIndexInScheme, unit })
    }

    function handleStyleUnit(unitValue) {

        if (land.scheme.length === 5) {
            return !unitValue ? styles.unit_min : styles.unit_pressed_min
        }
        else if (land.scheme.length === 10) {
            return !unitValue ? styles.unit_medium : styles.unit_pressed_medium
        }
        else if (land.scheme.length === 20) {
            return !unitValue ? styles.unit_max : styles.unit_pressed_max
        }
    }

    async function handlePlantMenu() {
        return !menu ? setMenu(true) : setMenu(false)
    }

    function handlePressed() {
        return !pressed ? setPressed(true) : setPressed(false)
    }

    function handleSelectItem(veggie) {
        handlePlantMenu()
        return setVeggie(veggie)
    }

    async function handleOnClickVeggie(_veggie) {
        setClickOnSameVeggie(true)
        return pressedVeggie === _veggie ? '' : setPressedVeggie(_veggie)
    }

    return (
        <Fragment>
            <TouchableWithoutFeedback
                onPress={() => { return menu ? handlePlantMenu() : '' }}>
                <ScrollView
                    style={styles.main_container}
                    scrollEnabled={false}>
                    <View
                        onPress={() => { return menu ? handlePlantMenu() : '' }}>
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
                                                <TouchableOpacity style={handleStyleUnit(unit.item)}
                                                    onPress={() => {
                                                        if (unit.item && pressed) {
                                                            if (typeof currentLand.scheme[scheme.indexOf(item)][unit.index] === 'boolean' && veggie !== undefined) {
                                                                // console.log('entered if')
                                                                return handleUnitPressed(scheme.indexOf(item), unit)
                                                            }
                                                        }
                                                        else if (unit.item && typeof currentLand.scheme[scheme.indexOf(item)][unit.index] !== 'boolean') {
                                                            // console.log('entered else')
                                                            return handleOnClickVeggie(currentLand.scheme[scheme.indexOf(item)][unit.index])
                                                        }
                                                        //return onClickVeggie(currentLand.scheme[scheme.indexOf(item)][unit.index])
                                                    }}>
                                                    {typeof currentLand.scheme[scheme.indexOf(item)][unit.index] !== 'boolean'
                                                        && veggie !== undefined
                                                        && <Image
                                                            source={images[
                                                                `${veggies.find(_veggie => _veggie.id === currentLand.scheme[scheme.indexOf(item)][unit.index]).name}`
                                                            ]}
                                                            style={styles.unit_image}
                                                            resizeMode='contain'></Image>}
                                                </TouchableOpacity>
                                            )
                                        }}
                                    />
                                )
                            }} />
                        <View style={styles.buttons_container}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        pressed ? handlePressed() : ''
                                        return handlePlantMenu()
                                        //possible problems
                                        //return veggie ? setVeggie(undefined) : ''
                                    }}>
                                    <Image
                                        style={styles.button}
                                        resizeMode='contain'
                                        source={change_veggie}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.button}
                                        resizeMode='contain'
                                        source={plant_now}
                                    ></Image>
                                </TouchableOpacity>
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
                                    style={!pressed ? '' : styles.button_plant_border}
                                    onPress={() => {
                                        if (!veggie) {
                                            return handlePlantMenu()
                                        }
                                        else return handlePressed()
                                    }}>
                                    <Image
                                        style={!pressed ? styles.button_plant : styles.button_plant_pressed}
                                        resizeMode='contain'
                                        source={!veggie ? land_with_text : images[`${veggie.item.name}`]}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </Fragment >
    )
}

export default PlantLand