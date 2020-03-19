import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        //right: 300,
    },
    divisions: {
        flex: 1,
        marginTop: 20,
        //alignSelf: 'center',
        // height: 80,
        width: 300,
    },
    less: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        left: 45,
        zIndex: 5,
    },
    more: {
        height: 30,
        width: 30,
        right: 45,
    }
})

export default styles 