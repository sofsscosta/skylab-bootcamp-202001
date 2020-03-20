import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { retrieveAll, plantInLand } from '../../logic'
import plant_now from '../../assets/plant_now.png'
import change_veggie from '../../assets/change_veggie.png'
import land_with_text from '../../assets/land-with-text.png'
import land_border from '../../assets/land_border.png'

function PlantLand({ land }) {

    const [currentLand, setCUrrentLand] = useState(land)
    const [divisions, setDivisions] = useState(5)
    const [scheme, setScheme] = useState(land.scheme)
    const [menu, setMenu] = useState(false)
    const [veggies, setVeggies] = useState()
    const [veggie, setVeggie] = useState(undefined)
    const [pressed, setPressed] = useState(false)
    const [unitPressed, setUnitPressed] = useState(false)

    const images = {
        tomatoes: require('../../assets/tomatoes.png'),
        potatoes: require('../../assets/potatoes.png'),
        carrots: require('../../assets/carrots.png'),
        strawberries: require('../../assets/strawberries.png'),
        spinach: require('../../assets/spinach.png')
    }

    useEffect(() => {
        ; (async function retrieveVeggies() {
            let veggies
            try {
                veggies = await retrieveAll()
                return setVeggies(veggies)
            } catch (error) {
                return console.log(error)
            }
        })()
    }, [])

    // useEffect(() => {}, [unitPressed])

    async function handlePlantMenu() {
        return !menu ? setMenu(true) : setMenu(false)
    }

    function handlePressed() {
        return !pressed ? setPressed(true) : setPressed(false)
    }

    async function handleUnitPressed(itemIndexInScheme, unit) {
        let _scheme = land.scheme
        try {
            console.log('scheme = ' + _scheme)
            console.log('unit = ' + _scheme[itemIndexInScheme][unit.index])
            _scheme[itemIndexInScheme][unit] = veggie.item.id
            await plantInLand(land, _scheme)
            return setUnitPressed({ itemIndexInScheme, unit })
        } catch (error) {
            return console.log(error)
        }
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
                                        <TouchableOpacity style={handleStyleUnit(unit.item)}
                                            onPress={() => {
                                                if (unit.item && pressed) {
                                                    console.log(unit.item)
                                                    console.log('onPress type = ' + land.scheme[scheme.indexOf(item)][unit] instanceof Boolean)
                                                    return handleUnitPressed(scheme.indexOf(item), unit)
                                                }
                                            }}>
                                            {pressed
                                                && unitPressed.item === scheme.indexOf(item)
                                                && unitPressed.unit === unit.index
                                                //|| !(land.scheme[scheme.indexOf(item)][unit] instanceof Boolean) && veggie !== undefined
                                                && <Image
                                                    source={images[`${veggie.item.name}`]}
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
            </ScrollView>
        </Fragment >
    )
}

export default PlantLand