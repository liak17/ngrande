import React from 'react';
import {AppRegistry, View, Text, StyleSheet, Image} from 'react-native';
import BotonComponente from '../componentes/BotonComponente';


const InicioScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.subtitulo}>BIENVENIDO A</Text>
      <Text style={styles.titulo}>NGRANDE</Text>
      <View style={styles.containerBotones}>
        <BotonComponente
          texto="Registrarse"
          screen={() => navigation.navigate('RegistroUnoScreen')}
          estilo={styles.botonPrimario}
        />
        <BotonComponente
          texto="Iniciar Sesión"
          screen={() => navigation.navigate('LoginScreen')}
          estilo={styles.botonSecundario}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  botonPrimario: {
    backgroundColor: '#FA4141',
    padding: 18,
    borderRadius: 50,
    fontSize: 14,
    fontFamily: 'Poppins',
    marginStart: 4,
    marginEnd: 8,
  },
  botonSecundario: {
    backgroundColor: '#7755CC',
    padding: 18,
    borderRadius: 50,
    fontSize: 14,
    marginEnd: 8,
  },
  container: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingLeft: 16,
    borderBottomWidth: 1,
    alignContent: 'space-between',
    height:'100%',
  },
  containerBotones: {
    flexDirection: 'row',
    flexWrap:'wrap',
    position:'absolute',
    bottom:29
    
  },
  subtitulo: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop:200
  },
  titulo: {
    fontSize: 48,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop:16
    },
  ggg: {
    backgroundColor: '#6C63FF',
  },
});

export default InicioScreen;
