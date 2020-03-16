import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    submit: {
        backgroundColor: 'plum',
        width: 250,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    redirect: {
        backgroundColor: 'lightgrey',
        width: 250,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    planted: {
        backgroundColor: 'green',
        width: 250,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    notPlanted: {
        backgroundColor: 'red',
        width: 250,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black',
        width: 250,
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    textWhite: {
        fontSize: 20,
        color: 'white',
        width: 250,
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    }
})

export default styles