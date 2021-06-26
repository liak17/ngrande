import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Button, Title, Checkbox, Card} from 'react-native-paper';
import {stylesApp} from '../const/styles.js';
import * as ViewsNames from '../const/ViewsNames.js';

const RegistroUnoScreen = ({navigation}) => {
  return (
    <View style={stylesApp.container}>
      <Title style={stylesApp.textTitle}>REGISTRARSE</Title>
      <View style={{flexDirection:'row', paddingTop:83}}>
      <View style={styles.cuadro}>
        <TouchableHighlight onPress={() => navigation.navigate(ViewsNames.RegistroScreenName)}>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/100/100'}} />
        </Card>
        </TouchableHighlight>
        <Text style={stylesApp.text}>REGISTRARSE COMO NEGOCIO</Text>
      </View>
      <View style={styles.cuadro}>
      <TouchableHighlight onPress={() => navigation.navigate('DashboardUserScreen')}>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/200/200'}} />
        </Card>
        </TouchableHighlight>
        <Text style={stylesApp.text}>REGISTRARSE COMO DISTRIBUIDOR</Text>
      </View>
      </View>
      <View style={styles.textoFinal}>
      <Text style={stylesApp.text} >Seguir como invitado</Text>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  cuadro: {
    flex:1, 
    marginEnd:10,
    marginRight:10,
  },

  textoFinal:{
    position:'absolute',
    bottom:29,
  },

});
export default RegistroUnoScreen;
