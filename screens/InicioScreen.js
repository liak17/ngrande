import React from 'react';
import {AppRegistry, View, Text, StyleSheet, Image} from 'react-native';
import BotonComponente from '../componentes/BotonComponente';
import * as ViewsNames from '../const/ViewsNames.js';
import {stylesApp} from '../const/styles.js';

const InicioScreen = ({navigation}) => {
  return (
    <View style={stylesApp.container}>
      <Image source={require('../assets/gg.jpeg')}
        style={{ justifyContent: 'center', height:300, width:300}}
      />
      <Text style={stylesApp.subTitle}>BIENVENIDO A</Text>
      <Text style={stylesApp.textTitle}>NGRANDE</Text>
    
      <View style={styles.containerBotones}>
        <BotonComponente
          texto="Registrarse"
          onPress={() => navigation.navigate(ViewsNames.RegistroUnoScreenName)}
          estilo={stylesApp.btnPrimary}
        />
        <BotonComponente
          texto="Iniciar Sesión"
          onPress={() => navigation.navigate(ViewsNames.LoginScreenName)}
          estilo={stylesApp.btnSecondary}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerBotones: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex:0,
    alignContent: 'flex-end',
    marginTop: 16,
  },

});

export default InicioScreen;
