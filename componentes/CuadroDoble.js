import React from 'react';
import {Text, StyleSheet, View,TouchableHighlight} from 'react-native';
import {Card} from 'react-native-paper';
import { stylesApp } from '../const/styles';
export default function CuadroDoble ({texto, onPress}){
    return(
        <View style={{flexDirection:'row', paddingTop:16}}>
        <View style={styles.cuadro}>
          <TouchableHighlight onPress={() => navigation.navigate('RegistroScreen')}>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/100/100'}} />
          </Card>
          </TouchableHighlight>
          <Text style={stylesApp.text}>{texto.texto}</Text>
          <Text style={stylesApp.text}>{texto.cantidadSucursales}</Text>
        </View>
        <View style={styles.cuadro}>
        <TouchableHighlight onPress={() => navigation.navigate('DashboardUserScreen')}>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/200/200'}} />
          </Card>
          </TouchableHighlight>
          <Text style={stylesApp.text}>{texto.texto}</Text>
          <Text style={stylesApp.text}>{texto.cantidadSucursales}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
  cuadro: {
    flex:1, 
    marginEnd:10,
    marginRight:10,
  },

})
