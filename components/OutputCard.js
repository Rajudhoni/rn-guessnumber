import React from 'react'
import { View, StyleSheet } from 'react-native'

const OutputCard = (props) => {
    return (
        <View {...props} style={styles.card}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 20,
        shadowOffset:{  width: 0,  height: 2 },
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default OutputCard;
