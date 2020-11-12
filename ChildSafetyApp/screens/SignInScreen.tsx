import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

export default SignInScreen;


function SignInScreen(){


  return (
<View style={styles.container}>
      <Text style={styles.titleText}>Enter your Details</Text>
        <TextInput
          keyboardType = 'email-address'
          placeholder='email'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
       >
         <Button title="Sign in" style={styles.buttonText}> Sign Up / Login </Button>
       </TouchableOpacity>
        
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});