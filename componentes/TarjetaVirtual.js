import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import { stylesApp } from '../const/styles';
export default function TarjetaVirtual ({cedula, nombre, numero, tipoEmprendendor}){
    return(
            <View>
            <Card style={styles.card}>
                <Avatar.Image style={{alignSelf: 'center'}} size={107} source={require('../assets/avatar.jpg')}/>
                <Text style={stylesApp.subTitle}>{cedula}</Text>
                <Text style={stylesApp.subTitle}>{nombre}</Text>
                <Text style={stylesApp.subTitle}>{numero}</Text>
                <Text style={stylesApp.subTitle}>{tipoEmprendendor}</Text>
                </Card>
            <Button style={stylesApp.btnPrimaryCuadrado}>Mi Link Pro</Button>
            
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
