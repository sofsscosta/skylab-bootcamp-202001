import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
    },
    subtitle: {
        fontSize: 20,
        marginTop: 30
    },
    query: {
        height: 20,
        fontSize: 20,
        borderRadius: 20,
        borderStyle: "solid",
        borderColor: 'black'

    }
})

export default styles