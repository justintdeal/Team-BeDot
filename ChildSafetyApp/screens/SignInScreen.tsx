import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

export default SignInScreen;


function SignInScreen({ navigation }){


  return (
<View style={styles.container}>
      <Text style={styles.titleText}>Enter your Details</Text>
        <TextInput
          keyboardType = 'email-address'
          placeholder='email'
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
       >
         <Button title="Sign in" style={styles.buttonText} onPress={()=> navigation.navigate('Home')
}/>
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