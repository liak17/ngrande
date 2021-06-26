<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ViewsNames from '../const/ViewsNames.js';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import { getErrorFormat, getWhereClause, setValue } from '../utils/index.js';
import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';

const { loginScreen } = ERRORS;
const handlerErrores = (prev, { cod, error, screen }) => {
  const id = cod;
  const currentErrores = prev.slice();
  const existThisError = currentErrores.some(({ cod }) => (cod === id));
  if (!existThisError) {
    return [...prev, { cod, error, screen }];
  } else {
    return currentErrores;
  }
}
const handlerRemoveErrores = (prev, cod) => {
  const id = cod;
  const current = prev.slice();
  const errorresUpdate = current.filter(({ cod }) => cod !== id);
  return errorresUpdate;
}

const validateField = (source, minSize, maxSize) => {
  if (typeof source === 'string') {
    return source.length > minSize - 1 && source.length < maxSize - 1
  }
}

const consulta = async (url, whereClause) => {
  try {    
    return await axios.post(url, {whereClause:whereClause});    
  } catch (error) {
    console.log(error);
    alert('verifica los datos')
  }
}
const Spinner = () => {
  return (
    <View>
      <Text style={styles.subtitulo}>Validando espere porfavor </Text>
      <ActivityIndicator size="large" color="#FA4141" />
    </View>)
}
/*Render*/
const LoginScreen = ({ navigation, login, setlogin,
  isLoading, setIsLoading, errores, seterrores }) => {

  const { cedula, password, isLogin } = login;

  const spinner = isLoading ? <Spinner /> : null;

  if (isLogin) navigation.navigate(ViewsNames.DashboardScreenName);

  const iniciarSesion = async () => {
    const validateFills = validateField(cedula, 9, 13) &&
      validateField(password, 3, 8);
    const { camposVacios } = loginScreen;
    if (validateFills) {
      setIsLoading(true)
      const { noExiste } = loginScreen;
      seterrores((prev) => handlerRemoveErrores(prev, camposVacios.cod));
         
      const r=[{
        attr: "ruc",
        value: cedula
      }, {
        attr: "password", 
        value:password
      }];
      
      const resultado=await consulta(VALIDAR,r).then((res) => {        
        const { data } = res;
        const { cod_user } = data;
        console.log(res);
        if (cod_user > 0) {
          setValue('isLogin',true,setlogin)
          navigation.navigate(ViewsNames.DashboardScreenName)
        } else {
          const error = getErrorFormat(ViewsNames.LoginScreenName, noExiste)
          seterrores((prev) => handlerErrores(prev, error));
        }
      }).catch(e => {
        const error = getErrorFormat(ViewsNames.LoginScreenName, noExiste)
        seterrores((prev) => handlerErrores(prev, error));
      })
      
      setIsLoading(false);
    }
    else {

      const error = getErrorFormat(ViewsNames.LoginScreenName, camposVacios)
      seterrores((prev) => handlerErrores(prev, error));
>>>>>>> 29c7cf662919446e85489a8b17395f646092b3a0
    }
  };
  const erroresLogin = errores.filter(({ screen }) =>
    screen === ViewsNames.LoginScreenName);


  const erroresComponent = erroresLogin.map(({ error }, i) =>
    (<Text style={styles.subtitulo} key={i}>{error}</Text>))




  return (
<<<<<<< HEAD
    <ScrollView style={stylesApp.container}>
      <View>
=======
    <ScrollView>
      <View style={{
        paddingTop: 10, justifyContent: 'center',
        marginBottom: 0,
        alignItems: 'center'
      }}>
        {spinner}
        {errores.length > 0 ? erroresComponent : null}
      </View>
      <View style={styles.container}>


>>>>>>> 29c7cf662919446e85489a8b17395f646092b3a0
        <Text style={styles.titulo}>INICIAR SESION</Text>
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          icon="camera"
          label="Cedula"
          mode="outlined"
          defaultValue={cedula}
          onChangeText={value => setValue('cedula', value, setlogin)}
        />
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          label="Contraseña"
          mode="outlined"
          defaultValue={password}
          onChangeText={value => setValue('password', value, setlogin)}
        />
        <View style={styles.containerBotones}>
          <Text style={stylesApp.text}>¿Olvidaste la contraseña?</Text>
          <BotonComponente
            texto="Iniciar Sesión"
            onPress={iniciarSesion}
<<<<<<< HEAD
            estilo={stylesApp.btnSecondary}
=======
            estilo={styles.botonSecundario}

>>>>>>> 29c7cf662919446e85489a8b17395f646092b3a0
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
<<<<<<< HEAD
  
=======
    marginTop: 0
>>>>>>> 29c7cf662919446e85489a8b17395f646092b3a0
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
