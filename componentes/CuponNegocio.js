import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Card, Title, Avatar, Paragraph, Button} from 'react-native-paper';
import {stylesApp} from '../const/styles.js';
export default function CuponNegocio ({cupon, onPress}){
    return(
        <TouchableHighlight onPress={onPress} style={{marginTop:16}}>
        <View>
            <Card>
                <Card.Cover source={{uri:cupon.imagen}} />
                <Card.Content>
                    <Title style={stylesApp.titleCupon}>{cupon.tituloCupon}</Title>
                   <Text style={stylesApp.textoPrecioNormal}>{cupon.precioNormal}$</Text>
                   <Text style={stylesApp.textoGana}>GANA: {cupon.gana}$</Text> 
                </Card.Content>
                
            </Card>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:18,
    },
    textoPrecioNormal: {
        fontSize: 18,
        fontWeight:'bold',
        color:'#999999'
    },
    textoGana: {
        fontSize: 24,
        color:'#FA4141',
        fontWeight:'bold',
    }
})