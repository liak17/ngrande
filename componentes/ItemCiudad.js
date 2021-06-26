import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Avatar} from 'react-native-paper';
export default function ItemCiudad ({ciudad, onPress}){
    return(
            <View style={{alignItems: 'center', paddingRight:16}}>
             <Avatar.Image size={84} source={require('../assets/avatar.jpg')} />
            <Text >{ciudad.ciudad}</Text>
            <Text >({ciudad.cantidadSucursales})</Text>
            </View>
    );
}
