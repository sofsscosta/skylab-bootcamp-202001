import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    message_container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: 20,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 20,
        // color: 'grey'
        fontWeight: '200'

    },
    description: {
        paddingTop: '10%',
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
        marginHorizontal: '5%',
        fontWeight: '200'
    }
})