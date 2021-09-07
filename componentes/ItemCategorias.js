import React,{ useEffect } from 'react';

import {Text,  View} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function ItemCategorias ({categoria, handlerOnPress}){
    
    
    return(
            <View style={{alignItems: 'center', paddingRight:16}}>
             <Avatar.Image  size={84} source={require('../assets/avatar.jpg')}/>
            <Text >{categoria.descripcion}</Text>            
            </View>
    );
}
