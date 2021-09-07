import React from 'react';
import {Text, StyleSheet, View,TouchableHighlight, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import { stylesApp } from '../const/styles';
let width = Dimensions.get('window').width/2-8;
export default function CuadroDoble ({texto,categoria, onPress}){
    const titulo=texto?texto.texto:categoria.descripcion;
    const cantidad=texto?texto.cantidadSucursales:"";
    return(
      
        <View style={{flexDirection:'row', paddingTop:16, width:width}}>
        <View style={styles.cuadro}>
          <TouchableHighlight onPress={() => onPress()}>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/100/100'}} />
          </Card>
          </TouchableHighlight>
          <View style={{display: 'flex', alignItems: 'center'}}>
          <Text style={stylesApp.textCuadroDoble}>{titulo}</Text>
          <Text style={stylesApp.textCuadroDoble}>{cantidad}</Text>
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
