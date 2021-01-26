import React, {useState} from 'react'
import { 
    View, Text, 
    StyleSheet,Button,
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'


        

const StartGameScreen = () => {
    const [enteredValue, setenteredValue] = useState('')
    
    const numberInputHandler = inputText =>{
       
        setenteredValue(inputText.replace(/[^0-9]+/g, '') )
    }

    return (
        <TouchableWithoutFeedback>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card>
                <Text>Select a Number </Text>
                <Input 
                    blurOnSubmit
                    autoCapitalize= "none"
                    autoCorrect={false}
                    keyboardType= "number-pad"                    
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
                </View>
            </Card>
           
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    
   buttonContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: '100%',
       paddingHorizontal: 15
      
   },
   
   button: {
       width: 90,
   }, 
   

    
})
export default StartGameScreen;
