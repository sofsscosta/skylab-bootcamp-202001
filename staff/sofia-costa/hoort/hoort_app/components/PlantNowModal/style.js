import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '80%',
        width: '80%',
        backgroundColor: 'rgba(300, 300, 300, 0.5)'
    },
    container_border: {
        backgroundColor: 'white',
        position: 'absolute',
        maxHeight: '35%',
        width: '80%',
        alignSelf: 'center',
        bottom: -170,
    },
    title: {
        color: 'rgb(135, 135, 135)',
        bottom: '75%',
        fontSize: 30,
        // zIndex: 20,
        position: 'absolute',
        width: '95%',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        bottom: '70%',
        tintColor: 'rgb(126, 194, 144)',
    },
    button_container: {
        top: '74%',
        // position: 'absolute',
        // zIndex: 20,
        height: '8%',
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    state: {
        // color: 'white',
        bottom: '57%',
        fontSize: 30,
        zIndex: 20,
        // position: 'absolute',
        width: 200,
        flex: 0.05,
        textAlign: 'center'
    },
    create: {
        // bottom: '140%',
        fontSize: 30,
        // color: 'white'
    },
    results_container: {
        // top: 150,
    }
})

export default styles