import { StyleSheet } from 'react-native'
import divisions from './index'

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: 'rgb(150, 150, 150)',
        width: 300,
        height: 500,
        alignSelf: 'center'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    unit: {
        height: 100,
        width: 100,
        //backgroundColor: 'rgb(187, 154, 99)',
        borderWidth: 1,
        borderColor: 'rgb(187, 154, 99)',
        borderStyle: 'dashed'
    },
    unit_pressed: {
        height: 100,
        width: 100,
        backgroundColor: 'rgb(187, 154, 99)',
        borderWidth: 0.5,
        borderColor: 'rgb(90, 90, 90)'
        //borderColor: 'rgb(187, 154, 99)',
    }
    // line: {
    //     flexDirection: 'column'
    // },
})

export default styles