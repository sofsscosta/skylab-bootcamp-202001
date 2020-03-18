import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        flexDirection: 'row',
        width: 250,
    },
    container_items: {
        padding: 20,
        paddingLeft: 50,
        flex: 1,
        flexDirection: 'row',
        width: 250,
        height: 10,
        bottom: 110
    },
    query: {
        zIndex: 10,
        fontSize: 30,
        marginBottom: 0,
        paddingRight: 0
    },
    results_container: {
        top: 200,
        flex: 1
    },
    image: {
        height: 70,
        width: 70
    },
    background: {
        width: 400,
        height: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 30,
        top: 45,
        height: 50,
        width: 300,
        marginLeft: 20,
        alignSelf: 'center',
        color: 'white'
    }

})

export default styles