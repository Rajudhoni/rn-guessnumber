import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';



const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerStyle}> {props.title}</Text>
        </View>
     
    )
}

const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    headerStyle: {
        color: 'black',
        fontSize: 20
    }
})

export default Header
