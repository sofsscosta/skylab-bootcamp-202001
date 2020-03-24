import React, { Fragment, useState, useEffect } from 'react'
import { FlatList, SectionList, TouchableOpacity, Text, View, Button, TextInput, Image, ScrollView } from 'react-native'
import styles from './style'
import { isLoggedIn, createLand, changeDivisions, retrieveUserLands, retrieveLand } from '../../logic'
import divisions_img from '../../assets/divisions_text.png'
import { ErrorModal } from '../'

function CreateLand({ goToPlantLand, initModal, newLandProps }) {

    const [error, setError] = useState()
    const [errorModal, setErrorModal] = useState(false)
    const [token, setToken] = useState()
    const [divisions, setDivisions] = useState(5)
    const [unit, setUnit] = useState()
    const [scheme, setScheme] = useState([
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ])

    useState(() => {
        initModal()
    }, [])

    useState(() => {
        setErrorModal(true)
    }, [error])

    useEffect(() => {
        (async () => {
            try {
                let _token = await isLoggedIn()
                if (_token !== null) setToken(_token)
                console.log(token)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [token])


    useEffect(() => {
        setScheme(scheme)
    }, [unit])

    useEffect(() => {
        setUnit(unit)
    }, [scheme])

    async function handleCreateLand() {

        console.log(newLandProps)
        let name = newLandProps.name
        let location = newLandProps.location
        let soiltype = newLandProps.soiltype

        let allLands, land
        try {
            await createLand(token, name, location, soiltype, scheme)
            allLands = await retrieveUserLands(token)
            land = allLands.find(_land => _land.name === name)
            return goToPlantLand(land)
        } catch (_error) {
            setError(_error)
            return handleToggle()
        }
    }

    async function handleChangeDivisions(operation) {
        let _scheme
        try {
            _scheme = await changeDivisions(operation, scheme)
            setDivisions(_scheme.length)
            return setScheme(_scheme)
        } catch (_error) {
            setError(_error)
            return handleToggle()
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

    function handlePressUnit(unit, item) {
        let num = unit.index
        setUnit(unit)

        element = unit.index

        scheme[scheme.indexOf(item)][num] = !unit.item ? true : false
        !unit.item ? unit.item = true : unit.item = false
        console.log(scheme)
    }

    function handleToggle() {
        if (errorModal) {
            setErrorModal(false)
            return initModal()
        }
        else setErrorModal(true)
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
                                        <TouchableOpacity
                                            style={handleStyleUnit(unit.item)}
                                            onPress={() => { return handlePressUnit(unit, item) }}
                                        />
                                    )
                                }}
                            />
                        )
                    }} />
                <View style={styles.divisions_container}>
                    <TouchableOpacity
                        style={styles.less}
                        onPress={() => handleChangeDivisions('-')} />
                    <Image
                        style={styles.divisions}
                        resizeMode='contain'
                        source={divisions_img} />
                    <TouchableOpacity
                        style={styles.more}
                        onPress={() => handleChangeDivisions('+')} />
                </View>
                {/* <ChangeDivisions currentScheme={scheme} updateDivisions={handleChangeDivisions} /> */}
            </ScrollView>
            <TouchableOpacity
                style={styles.button_container}
                onPress={async () => {
                    return await handleCreateLand()
                }}>
                <Text style={styles.button_text}>NEXT</Text>
            </TouchableOpacity>
            {errorModal && error &&
                <ErrorModal level='error' message={error.message} toggle={handleToggle} />
            }
        </Fragment>
    )
}

export default CreateLand