import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ViewsNames from '../const/ViewsNames.js';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import { setValue, validateField } from '../utils/index.js';
import {
  handlerErrores, existThisDataForThisScreen
  , handlerRemoveErrores, getErrorFormat
} from '../utils/ErroresHandlers.js';
import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';
import { stylesApp } from '../const/styles.js';
import { Spinner } from '../componentes/ui/Spinner.js'

const { loginScreen } = ERRORS;

const consulta = async (url, whereClause) => { 
    
  try {
    return await axios.post(url, {
      whereClause: [
        {
          attr: "ruc",
          value: "22270222138"
        }, {
          attr: "password", value: "1234"
        }]
    }
    );
  } catch (error) {
    console.log(error);
    alert('verifica los datos')
  }
}

/*Render*/
const LoginScreen = ({ navigation, login, setlogin,
  isLoading, setIsLoading, errores, seterrores }) => {

  const { cedula, password } = login;
  const spinner = isLoading ? <Spinner /> : null;

  const iniciarSesion = async () => {

    const { camposVacios } = loginScreen;
    const validateFills = validateField(cedula, 9, 13) &&
      validateField(password, 3, 8);

    if (validateFills) {
      setIsLoading(true)
      const { noExiste } = loginScreen;
      seterrores((prev) => handlerRemoveErrores(prev, camposVacios.cod));
      
      const campos = [{
        attr: "ruc",
        value: cedula
      }, {
        attr: "password",
        value:password
      }];
      
      const resultado=await consulta(VALIDAR, campos).then((res) => {
        console.log(res);
        const { data } = res;
        const { cod_user } = data;
        if (cod_user > 0) {                    
          setValue('isLogin', true, setlogin)
          //navigation.navigate(ViewsNames.DashboardScreenName)
        } else {
          const error = getErrorFormat(ViewsNames.LoginScreenName, noExiste)
          seterrores((prev) => handlerErrores(prev, error));
        }
      }).
      catch(e => {
        console.log(e);
        const error = getErrorFormat(ViewsNames.LoginScreenName, noExiste)
        seterrores((prev) => handlerErrores(prev, error));
      })

      setIsLoading(false);
    }
    else {
      const error = getErrorFormat(ViewsNames.LoginScreenName, camposVacios)
      seterrores((prev) => handlerErrores(prev, error));
    }
  };
  const someErrorForThisScreen = existThisDataForThisScreen(errores, 'screen',
    ViewsNames.LoginScreenName);
  const erroresLogin = someErrorForThisScreen ? errores.filter(({ screen }) =>
    screen === ViewsNames.LoginScreenName) : [];
  const erroresComponent = erroresLogin.length > 0 ? erroresLogin.map(({ error }, i) =>
    (<Text style={styles.subtitulo} key={i}>{error}</Text>)) : null;

  return (
    <ScrollView>
      <View style={{
        paddingTop: 10, justifyContent: 'center',
        marginBottom: 0,
        alignItems: 'center'
      }}>
        {spinner}
        {erroresComponent ? erroresComponent : null}
      </View>
      <View style={styles.container}>


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
            estilo={styles.botonSecundario}

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
    marginTop: 0
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
