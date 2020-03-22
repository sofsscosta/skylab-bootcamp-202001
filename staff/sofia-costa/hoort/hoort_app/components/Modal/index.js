import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { isLoggedIn, retrieveItem, updateLandPlantVeggie, updateLandHarvestVeggie, retrieveLand } from '../../logic'
import styles from './style'
import modal_border from '../../assets/modal_border.png'
import button from '../../assets/divisions.png'

function Modal({ onBackgroundClick, type, veggie, land, token }) {

    const [currentVeggie, setCurrentVeggie] = useState(veggie)
    const [currentType, setCurrentType] = useState(type)
    const [updatedLand, setUpdatedLand] = useState(land)

    useEffect(() => {
        (async () => {
            try {
                const veg = await retrieveItem(currentVeggie.id)
                setCurrentVeggie(veg)

                let _land = await retrieveLand(token, land.id)
                setUpdatedLand(_land)
                return

            } catch (error) {
                return console.log('modal initial error', error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                if (currentType === 'planted') {
                    await updateLandPlantVeggie(updatedLand.id, currentVeggie.id, token)
                    setUpdatedLand(updatedLand)
                    return
                }
                else if (currentType === 'harvested') {
                    await updateLandHarvestVeggie(updatedLand.id, currentVeggie.id, token)
                    setUpdatedLand(updatedLand)
                    return
                }

            } catch (error) {
                return console.log('modal second error', error)
            }
        })()
    }, [token, currentVeggie, currentType, updatedLand])

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
                <Text style={styles.title}>{currentVeggie && currentVeggie.name.toUpperCase()}</Text>
                <Image
                    source={button}
                    style={
                        currentType === 'notPlanted' && styles.button_notPlanted ||
                        currentType === 'planted' && styles.button_planted ||
                        currentType === 'harvested' && styles.button_harvest}
                    resizeMode='stretch'
                ></Image>
                <Image
                    source={modal_border}
                    resizeMode='stretch'
                    style={styles.container_border} />
                <Text style={styles.state}>{
                    currentType === 'notPlanted' && 'NOT PLANTED' ||
                    currentType === 'planted' && 'PLANTED' ||
                    currentType === 'harvested' && 'READY'}</Text>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            currentType === 'notPlanted' && handlePlant() ||
                                currentType === 'planted' && handleHarvest()
                        }}>
                        <Text>{
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