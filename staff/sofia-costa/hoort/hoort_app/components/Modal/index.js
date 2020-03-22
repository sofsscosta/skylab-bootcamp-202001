import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { isLoggedIn, retrieveItem, updateLandPlantVeggie, updateLandHarvestVeggie, retrieveLand } from '../../logic'
import styles from './style'
import modal_border from '../../assets/modal_border.png'
import button from '../../assets/divisions.png'

function Modal({ onBackgroundClick, type, veggie, land, token }) {

    const [currentType, setCurrentType] = useState(type)

    async function handlePlant() {
        try {
            await updateLandPlantVeggie(land.id, veggie.id, token)
            return setCurrentType('planted')
        }
        catch (error) {
            return console.log(error)
        }
    }

    async function handleHarvest() {
        try {
            console.log('entered')
            await updateLandHarvestVeggie(land.id, veggie.id, token)
            return setCurrentType('harvested')
        }
        catch (error) {
            return console.log(error)
        }
    }

    function handleDays() {

        let today = new Date()
        let plantation = land.plantation.find(plant => plant.veggie.id.toString() === veggie.id)

        let minDate = plantation.estTime.slice('-')[0]

        22 / 5 / 2020 - 11 / 6 / 2020

        return days
    }

    return (
        <TouchableWithoutFeedback
            onPress={onBackgroundClick}>
            <View style={styles.container} >
                <Text style={styles.title}>{veggie && veggie.name.toUpperCase()}</Text>
                <Image
                    source={button}
                    style={
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
                    currentType === 'notPlanted' && 'NOT PLANTED' ||
                    currentType === 'planted' && 'PLANTED' ||
                    currentType === 'harvested' && 'HARVESTED'
                    // || currentType === 'ready' && 'READY'
                }</Text>
                <Text>{
                    currentType === 'planted' && `${() => handleDays()} TILL HARVEST`
                }</Text>
                <TouchableOpacity
                    style={styles.update_button_container}
                    onPress={() => currentType === 'notPlanted' && handlePlant() ||
                        currentType === 'planted' /*|| currentType === 'ready'*/ && handleHarvest()
                    }>
                    <Text style={
                        currentType === 'notPlanted' && styles.update_button_not_planted ||
                        currentType === 'planted' && styles.update_button_planted
                    }>{
                            currentType === 'notPlanted' && 'CLICK TO PLANT' ||
                            currentType === 'planted' && 'UPDATE TO HARVESTED'
                        }</Text>
                </TouchableOpacity>
                <View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default Modal