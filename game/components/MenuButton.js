import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function MenuButton({text, onPress}) {
   return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.button}>
               <Text style={styles.buttonText}>{text}</Text>
           </View>
       </TouchableOpacity>
   ) 
    
}

const styles = StyleSheet.create(
    {
        button: {
            borderRadius: 20,
            paddingVertical: 7,
            paddingHorizontal: 10,
            backgroundColor: 'transparent', 
            alignItems: 'center',
        },
        buttonText: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center'
        }
    }
)