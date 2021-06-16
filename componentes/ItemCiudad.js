import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Avatar} from 'react-native-paper';
export default function ItemCiudad ({ciudad, numero}){
    return(
            <View style={{alignItems: 'center'}}>
             <Avatar.Image size={84} source={require('../assets/avatar.jpg')} />
            <Text >{ciudad}</Text>
            <Text >({numero})</Text>
            </View>
    );
}
