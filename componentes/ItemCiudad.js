import React,{ useEffect } from 'react';

import {Text,  View} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function ItemCiudad ({ciudad, onPress}){
    
    
    return(
            <View style={{alignItems: 'center', paddingRight:16}}>
             <Avatar.Image size={84} source={require('../assets/avatar.jpg')} />
            <Text >{ciudad.ciudade}</Text>
            <Text >({ciudad.cantidad})</Text>
            </View>
    );
}
