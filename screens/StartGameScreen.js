import React, {useState} from 'react'
import { 
    View, Text, 
    StyleSheet,Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from 'react-native'
import Card from '../components/Card'
import OutputCard from '../components/OutputCard';
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';


        

const StartGameScreen = () => {
    const [enteredValue, setenteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    
    const numberInputHandler = inputText =>{
       
        setenteredValue(inputText.replace(/[^0-9]+/g, '') )
    }
    const resetInputHandler = () => {
        setenteredValue('');
        setConfirmed(false);

    }
    const confirmedInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 
                        'Number has to be a number between 1 and 99',
                        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
                        )
            return ;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setenteredValue('');
        Keyboard.dismiss();
        
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
                    <OutputCard style={styles.summaryContainer}>
                        <Text>You Selected</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title="START GAME"  />
                    </OutputCard>
                    )
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
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
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={confirmedInputHandler} /></View>
                </View>
            </Card>
            {confirmedOutput}
           
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
   summaryContainer: {
       marginTop: 20
   }
   

    
})
export default StartGameScreen;
