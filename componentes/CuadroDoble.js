import React from 'react';
import {Text, StyleSheet, View,TouchableHighlight, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import { stylesApp } from '../const/styles';
let width = Dimensions.get('window').width/2-8;
export default function CuadroDoble ({texto, onPress}){
  
    return(
      
        <View style={{flexDirection:'row', paddingTop:16, width:width}}>
        <View style={styles.cuadro}>
          <TouchableHighlight onPress={() => navigation.navigate('RegistroScreen')}>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/100/100'}} />
          </Card>
          </TouchableHighlight>
          <View style={{display: 'flex', alignItems: 'center'}}>
          <Text style={stylesApp.textCuadroDoble}>{texto.texto}</Text>
          <Text style={stylesApp.textCuadroDoble}>{texto.cantidadSucursales}</Text>
          </View>
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
