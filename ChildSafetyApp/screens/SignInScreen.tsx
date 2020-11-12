import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TextInput, Button, Alert } from 'react-native';

import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

export default SignInScreen;


function SignInScreen(){
  return (
    <View>
      <TextInput
        placeholder="Username"
      />
      <TextInput
        placeholder="Password"
      />
      <Button title="Sign in" onPress={()=> Alert.alert('Alert')} />
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