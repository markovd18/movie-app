import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    card: {
        minHeight: 200,
        maxWidth: 400,
        margin: 10,
        padding: 5,
        borderRadius: 10,
        flex: 2,
        flexDirection: 'column',
    },
    moviePoster: {
        borderRadius: 10,
        minHeight: 100
    },
    description: {
        padding: 18,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        width: '50%',
    },
    movieHeaderText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { 
            width: -1, 
            height: 1 
        },
        textShadowRadius: 10
    },
    movieHeader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});