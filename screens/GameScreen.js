import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const generateRandomBetween = (min, max, exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max- min)) + min;

    if(randNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else{
        return rndNum;
    }
};


const GameScreen = (props) => {
    const [currentGuess, setcurrentGuess] = useState(
        generateRandomBetween(1,100, props.userChoice)
    );
};



export default GameScreen;
