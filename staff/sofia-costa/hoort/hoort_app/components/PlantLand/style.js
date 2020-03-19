import { StyleSheet } from 'react-native'
import React, { Fragment, useState, useEffect } from 'react'

let height = 460
let width = 276

const styles = StyleSheet.create({
    main_container: {
        height: 1000,
        alignSelf: 'center',
        overflow: 'visible'
    },
    container: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        // borderRadius: 15,
        // right: 40,
        // justifyContent: 'center',
        width: width,
        height: height,
        // borderWidth: 1
    },
    unit_min: {
        flex: 1,
        height: height / 5,
        width: width / 3,
    },
    unit_pressed_min: {
        flex: 1,
        height: height / 5,
        width: width / 3,
        backgroundColor: 'rgb(255, 243, 223)',
        borderWidth: 1,
        borderColor: 'rgb(187, 154, 99)',
        borderStyle: 'dashed'
    },
    unit_medium: {
        flex: 1,
        height: height / 10,
        width: width / 6,
    },
    unit_pressed_medium: {
        flex: 1,
        height: height / 10,
        width: width / 6,
        backgroundColor: 'rgb(187, 154, 99)',
        borderWidth: 0.5,
        borderColor: 'rgb(90, 90, 90)'
    },
    unit_max: {
        flex: 1,
        height: height / 20,
        width: width / 12,
        borderWidth: 1,
    },
    unit_pressed_max: {
        flex: 1,
        height: height / 20,
        width: width / 12,
        backgroundColor: 'rgb(187, 154, 99)',
        borderWidth: 0.5,
        borderColor: 'rgb(90, 90, 90)'
    },
    buttons_container: {
        flexDirection: 'row'
    },
    button: {
        width: 250,
        height: 55,
        marginTop: 15,
        marginRight: 15
    },
    button_plant: {
        marginTop: 15,
        width: 120,
        height: 120
    }
})

export default styles