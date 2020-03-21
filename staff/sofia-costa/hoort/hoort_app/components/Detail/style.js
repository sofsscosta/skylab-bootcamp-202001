import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title_container: {
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: 'transparent'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 40,
        color: 'transparent'
    },
    userVeggie: {
        margin: 10,
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        fontSize: 40,
        backgroundColor: 'transparent'
    },
    subtitles: {
        fontSize: 20,
    },
    image: {
        height: 250,
        width: 250,
        flex: 2,
        alignSelf: 'center',
        marginBottom: 40
    },
    inline: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    description: {
        alignSelf: 'flex-end',
        paddingRight: 100,
        lineHeight: 30
    },
    userVeggie_description: {
        marginTop: 30,
        color: 'rgb(126, 194, 144)',
        fontWeight: "500"
    },
    icons: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})

export default styles