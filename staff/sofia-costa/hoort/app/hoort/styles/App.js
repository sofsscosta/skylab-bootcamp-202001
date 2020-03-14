import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header__container: {
        paddingTop: 70,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
    },
    logo: {
        flex: 1,
        height: 80,
        width: 100,
    },
    icon: {
        flex: 1,
        height: 80,
        //alignSelf: 'center',
        width: 100,
    },
    menu: {
        flex: 1,
        height: 40,
        width: 40,
        alignSelf: 'center'
    },
    landing: {
        width: 150,
        height: 300
    },
    title: {
        color: 'grey',
        fontSize: 50
    },
    header: {
        width: undefined,
        height: 170,
    },
    footer: {
        width: undefined,
        height: 100
    }
})

export default styles