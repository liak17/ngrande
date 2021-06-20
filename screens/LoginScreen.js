import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ViewsNames from '../const/ViewsNames.js';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';

const LoginScreen = ({ navigation, login, setlogin }) => {

  const { cedula, password, isLogin } = login
  
  const setValue = (name, value) => {
    setlogin(prev => (Object.assign(prev, { [name]: value })));
  };

  const iniciarSesion =async () => {
    if (cedula!=='' && password!=='') {
      const url = 'https://infinite-crag-10539.herokuapp.com/validate/login'
  
      try {
        const resultado = await
        axios.post(url,
          {
            whereClause: [
              {
                "attr": "ruc",
                "value": "22270222138"
              },{
                "attr":"password","value":"1234"
              }]
          }).catch(error=>alert('verifica los datos'));
          console.log(resultado.data);
          setValue('isLogin',true)
          console.log(isLogin);
          navigation.navigate(ViewsNames.DashboardScreenName)
      } catch (error) {
        alert('verifica los datos')
      }
      
    } else {
      alert('Por favor rellena los datos')
      
    }

  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>INICIAR SESION</Text>
        <TextInput
          label="Cedula"
          mode="outlined"
          defaultValue={cedula}
          onChangeText={value => setValue('cedula', value)}
        />
        <TextInput
          label="Contraseña"
          mode="outlined"
          defaultValue={password}
          onChangeText={value => setValue('password', value)}
        />
        <View style={styles.containerBotones}>
          <Text style={styles.subtitulo}>¿Olvidaste la contraseña?</Text>
          <BotonComponente
            texto="Iniciar Sesión"
            onPress={iniciarSesion}
            
            estilo={styles.botonSecundario}

          />
        </View>
      </View>
    </ScrollView>
  )
}

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
    marginStart: 10,
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
    height: '100%',
  },
  containerBotones: {
    marginTop: 100,
    flexDirection: 'row',
    position: 'relative',
    bottom: 30,

  },
  subtitulo: {
    fontSize: 14,
    fontFamily: 'Poppins',
    marginTop: 16,
    marginStart: 16,
  },
  titulo: {
    fontSize: 48,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 16,
    marginTop: 200,
    marginBottom: 16
  },
  ggg: {
    backgroundColor: '#6C63FF',
  },
});

export default LoginScreen;