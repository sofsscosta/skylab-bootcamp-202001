import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { isLoggedIn, retrieveItem, updateLandPlantVeggie, updateLandHarvestVeggie, retrieveLand } from '../../logic'
import styles from './style'
import modal_border from '../../assets/modal_border.png'
import button from '../../assets/divisions.png'

function Modal({ onBackgroundClick, type, veggie, land, token }) {

    console.log('veggieType in modal', type)
    console.log('veg in modal', veggie)
    console.log('currentLand in modal', land.plantation)

    console.log('land', land)
    console.log('veg in modal', veg)

    const [currentType, setCurrentType] = useState(type)

    // const [to, setTo] = useState()
    // const [from, setFrom] = useState()

    let veg = land.plantation.find(_plant => _plant.veggie.toString() === veggie.id)


    let to = veg.to
    let from = veg.from

    // useEffect(() => {

    // })

    useEffect(() => {
        (async () => {
            try {

                // if (from && !to) {
                if (currentType === 'planted') {
                    await updateLandPlantVeggie(land.id, veggie.id, token)
                    return
                }
                // else if (from && to) {
                else if (currentType === 'harvested') {
                    await updateLandHarvestVeggie(land.id, veggie.id, token)
                    return
                }

            } catch (error) {
                return console.log('modal second error', error)
            }
        })()
    }, [currentType])

    function handlePlant() {
        return setCurrentType('planted')
    }

    function handleHarvest() {
        return setCurrentType('harvested')
    }

    return (
        <TouchableWithoutFeedback
            onPress={onBackgroundClick}>
            <View style={styles.container} >
                <Text style={styles.title}>{veggie && veggie.name.toUpperCase()}</Text>
                <Image
                    source={button}
                    style={
                        // !from && !to && styles.button_notPlanted ||
                        // !from && to && styles.button_planted ||
                        // from && to && styles.button_harvest

                        currentType === 'notPlanted' && styles.button_notPlanted ||
                        currentType === 'planted' && styles.button_planted ||
                        currentType === 'harvested' && styles.button_harvest
                    }
                    resizeMode='stretch'
                ></Image>
                <Image
                    source={modal_border}
                    resizeMode='stretch'
                    style={styles.container_border} />
                <Text style={styles.state}>{

                    // !from && !to && 'NOT PLANTED' ||
                    // !from && to && 'PLANTED' ||
                    // from && to && 'READY'

                    currentType === 'notPlanted' && 'NOT PLANTED' ||
                    currentType === 'planted' && 'PLANTED' ||
                    currentType === 'harvested' && 'READY'
                }</Text>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            // return !from && !to && handlePlant() ||
                            //     !from && to && handleHarvest()
                            return currentType === 'notPlanted' && handlePlant() ||
                                currentType === 'planted' && handleHarvest()
                        }}>
                        <Text>{
                            // !from && !to && 'click to plant' ||
                            // !from && to && 'click to update to harvested'

                            currentType === 'notPlanted' && 'click to plant' ||
                            currentType === 'planted' && 'click to update to harvested'
                        }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default Modal