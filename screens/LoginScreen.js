import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as ViewsNames from '../const/ViewsNames.js';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import { stylesApp } from '../const/styles.js';

const LoginScreen = ({navigation, login, setlogin}) => {
  const {cedula, password, isLogin} = login;

  const setValue = (name, value) => {
    setlogin(prev => Object.assign(prev, {[name]: value}));
  };

  const iniciarSesion = async () => {
    if (cedula !== '' && password !== '') {
      const url = 'https://infinite-crag-10539.herokuapp.com/validate/login';

      try {
        const resultado = await axios
          .post(url, {
            whereClause: [
              {
                attr: 'ruc',
                value: '22270222138',
              },
              {
                attr: 'password',
                value: '1234',
              },
            ],
          })
          .catch(error => alert('verifica los datos'));
        console.log(resultado.data);
        setValue('isLogin', true);
        console.log(isLogin);
        navigation.navigate(ViewsNames.DashboardScreenName);
      } catch (error) {
        alert('verifica los datos');
      }
    } else {
      alert('Por favor rellena los datos');
    }
  };

  return (
    <ScrollView style={stylesApp.container}>
      <View>
        <Text style={styles.titulo}>INICIAR SESION</Text>
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          icon="camera"
          label="Cedula"
          mode="outlined"
          defaultValue={cedula}
          onChangeText={value => setValue('cedula', value)}
        />
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          label="Contraseña"
          mode="outlined"
          defaultValue={password}
          onChangeText={value => setValue('password', value)}
        />
        <View style={styles.containerBotones}>
          <Text style={stylesApp.text}>¿Olvidaste la contraseña?</Text>
          <BotonComponente
            texto="Iniciar Sesión"
            onPress={iniciarSesion}
            estilo={stylesApp.btnSecondary}
          />
        </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 15,
    paddingLeft: 16,
    borderBottomWidth: 1,
    alignContent: 'space-between',
    height: '100%',
  
  },
  containerBotones: {
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  
  },

  titulo: {
    fontSize: 48,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 16,
    marginTop: 200,
    marginBottom: 16,
  },
});

export default LoginScreen;
