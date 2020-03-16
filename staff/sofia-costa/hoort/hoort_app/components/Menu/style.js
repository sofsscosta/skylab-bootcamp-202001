import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        height: 100,
        top: 60
    },
    header: {
        flex: 1.5,
        alignSelf: 'center',
    },
    options: {
        flex: 1,
        flexWrap: 'wrap',
        alignSelf: 'center',
        color: 'black',
        marginTop: 30,
        height: 30,
        display: 'flex',
        padding: 5,
        borderWidth: 2,
        overflow: 'visible'
    }
})

export default styles