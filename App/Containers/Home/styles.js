import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        paddingTop: 10,
    },
    postCard: {
        padding: 10,
    },
    loadingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postTitleAndBodyContainer: {
        paddingVertical: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    postDetailsTitle: {
        fontWeight: '600',
    },
    postDetailsBody: {
        marginTop: 10,
    }
})