import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';
import CuadroCiudad from './components/CuadroCiudad';

const CiudadesScreen = (props) =>{
    return(
        <View>
            <Title>TECNOLOGIA</Title>
            <CuadroCiudad ciudad='Quito'/>
        </View>
    )
}

export default CiudadesScreen;