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
    },
    searchBar: {
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center'
    }
})