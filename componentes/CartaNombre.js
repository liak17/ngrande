import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import { stylesApp } from '../const/styles';
export default function CartaNombre ({cedula, nombre, numero}){
    console.log(cedula, nombre, numero);
    return(
            <View>
            <Card style={styles.card}>
                <Avatar.Image style={{alignSelf: 'center'}} size={107} source={require('../assets/avatar.jpg')}/>
                <Text style={stylesApp.subTitle}>{cedula}</Text>
                <Text style={stylesApp.subTitle}>{nombre}</Text>
                <Text style={stylesApp.subTitle}>{numero}</Text>
                </Card>
            </View>
    );
}

const styles = StyleSheet.create({ 
    card: {
        alignItems: 'center',
        paddingVertical:16,
        justifyContent: 'center'
        },
})
