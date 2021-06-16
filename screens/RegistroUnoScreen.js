import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Button, Title, Checkbox, Card} from 'react-native-paper';

const RegistroUnoScreen = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <Title style={{fontSize:36, paddingTop:10}}>REGISTRARSE</Title>
      <View style={{flexDirection:'row', paddingTop:83}}>
      <View style={styles.cuadro}>
        <TouchableHighlight onPress={() => navigation.navigate('RegistroScreen')}>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/100/100'}} />
        </Card>
        </TouchableHighlight>
        <Text style={styles.texto}>REGISTRARSE COMO NEGOCIO</Text>
      </View>
      <View style={styles.cuadro}>
      <TouchableHighlight onPress={() => navigation.navigate('DashboardScreen')}>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/200/200'}} />
        </Card>
        </TouchableHighlight>
        <Text style={styles.texto}>REGISTRARSE COMO DISTRIBUIDOR</Text>
      </View>
      </View>
      <View style={styles.textoFinal}>
      <Text>Seguir como invitado</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 36,
    marginLeft: 39,
    marginRight: 39,
    paddingBottom:36, 
    height:'100%',
  },
  cuadro: {
    flex:1, 
    marginEnd:10,
    marginRight:10,
  },
  texto:{
      paddingTop:18,
      fontWeight:'bold'
  },
  textoFinal:{
    position:'absolute',
    bottom:29
  }
});
export default RegistroUnoScreen;
