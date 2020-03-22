import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { isLoggedIn, retrieveItem, updateLandPlantVeggie, updateLandHarvestVeggie, retrieveLand } from '../../logic'
import styles from './style'
import modal_border from '../../assets/modal_border.png'
import button from '../../assets/divisions.png'

function Modal({ onBackgroundClick, type, veggie, land }) {

    console.log('veggie', veggie)

    const [token, setToken] = useState()
    const [currentVeggie, setCurrentVeggie] = useState()
    const [currentType, setCurrentType] = useState(type)
    const [updatedLand, setUpdatedLand] = useState(land)

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                if (_token !== null) return setToken(_token)
            } catch (error) {
                return console.log(error)
            }
        })()
    }, [token])

    useEffect(() => {
        (async () => {
            try {
                console.log('start')
                const veg = await retrieveItem(veggie.id)
                setCurrentVeggie(veg)
                console.log('currentVeggie', currentVeggie)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                let _land = await retrieveLand(token, currentLand.id)
                console.log('_land with item added to plantation', _land)
            } catch (error) {

            }
        })()
    }, [currentType])

    async function handlePlant() {
        await updateLandPlantVeggie(updatedLand.id, veggie.id, token)
        setCurrentType('planted')
    }

    async function handleHarvest() {
        await updateLandHarvestVeggie(updatedLand.id, veggie.id, token),
            setCurrentType('harvested')
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
                        currentType === 'readyToHarvest' && styles.button_harvest}
                    resizeMode='stretch'
                ></Image>
                <Image
                    source={modal_border}
                    resizeMode='stretch'
                    style={styles.container_border} />
                <Text style={styles.state}>{
                    currentType === 'notPlanted' && 'NOT PLANTED' ||
                    currentType === 'planted' && 'PLANTED' ||
                    currentType === 'readyToHarvest' && 'READY'}</Text>
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