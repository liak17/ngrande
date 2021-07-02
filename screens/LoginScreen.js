import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ViewsNames from '../const/ViewsNames.js';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import { setValue, validateFieldExactLength, validateFieldRage } from '../utils/index.js';
import {
  handlerErrores, haveThisKeyValue
  , handlerRemoveErrores
} from '../utils/ErroresHandlers.js';
import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';
import { stylesApp } from '../const/styles.js';
import { Spinner } from '../componentes/ui/Spinner.js'
import { getRuleFormat, LOGINRULES, RULESLENGTH, RULESSTRING } from '../const/Rules.js';

const { loginScreen } = ERRORS;

const consulta = async (url, whereClause) => {
  return await axios.post(url, { whereClause: whereClause });
}

const whoIsThisIdentificador = (identificador) => {  
  const isTypeCedula = identificador.length === LOGINRULES.cedula.length;
  const isTypeRuc = identificador.length === LOGINRULES.ruc.length;
  if (isTypeCedula) {
    return 'cedula';
  } else if (isTypeRuc) {
    return 'ruc';
  }
  return 'na';

}

const validatorCampo = ({ value, typeOfrule, valueOfRule, trowError }) => {

  const lengthOfIdentificador = value.length;
  switch (typeOfrule) {
    case RULESLENGTH.max:
      return lengthOfIdentificador <= valueOfRule ? true : trowError;
    case RULESLENGTH.min:
      return lengthOfIdentificador >= valueOfRule ? true : trowError;
    case RULESLENGTH.equal:
      return lengthOfIdentificador === valueOfRule ? true : trowError;
    case RULESSTRING.equal:
      return value === valueOfRule ? true : trowError;
    case RULESSTRING.equalBetween:
      return (value === valueOfRule.a || value === valueOfRule.b) || trowError;
    default:
      return false;
  }
}

//corregir el nombre identificador por rules ,tambien en el archivo Rules
const getErrores = ({ identificador }) => {
  const { value, validators } = identificador;
  const erroresTrigged = validators.map(
    ({ validator, params }) => {      
      return validator(params)
    }
  );
  const erroresFiltrados = erroresTrigged.filter((val) => val != true);
  return erroresFiltrados;
}


const handlerErroreWithRulessUI = (callbackGetErrores, rules,
  setErroresState, cod) => {
  const erroresObtenidos = callbackGetErrores(rules);
  erroresObtenidos.length > 0 ? setErroresState((prev) => handlerErrores(prev, ...erroresObtenidos)) :
    setErroresState((prev) => handlerRemoveErrores(prev, cod));
}

const handlerErrorUI = (error, setErroresState, remove) => {
  remove ? setErroresState((prev) => handlerRemoveErrores(prev, error.cod)) :
    setErroresState((prev) => handlerErrores(prev, error))
}

/*Render*/
const LoginScreen = ({ login, setlogin,
  isLoading, setIsLoading, errores, seterrores, setuser }) => {
  const { cedula, password } = login;

  const spinner = isLoading ? <Spinner /> : null;

  const [active, setactive] = useState(false)

  //se define las reglas para cada campo
  const rulesCedula = getRuleFormat(cedula, {
    validator: validatorCampo,
    params: {
      value: whoIsThisIdentificador(cedula),
      typeOfrule: RULESSTRING.equalBetween,
      valueOfRule: { a: 'cedula', b: 'ruc' },
      trowError: loginScreen.limiteCaracteres
    }
  });
  const rulesPassword = getRuleFormat(password, {
    validator: validatorCampo,
    params: {
      value: password,
      typeOfrule: RULESLENGTH.min,
      valueOfRule: 2,
      trowError: loginScreen.limiteCaracteres.createCustoError("La contraseña no tiene el tamaño minimo", '1002')
    }
  })


  useEffect(async () => {

    const iniciarSesionTest = async () => {
      setIsLoading(true)
      
      handlerErroreWithRulessUI(getErrores, rulesCedula,
        seterrores, loginScreen.limiteCaracteres.cod);
      handlerErroreWithRulessUI(getErrores, rulesPassword,
        seterrores, '1002');

      const erroresCedula = getErrores(rulesCedula)
      const erroresPassword = getErrores(rulesPassword)

      const existError = erroresCedula.length > 0 ||
        erroresPassword.length > 0;        
      if (!existError) {

        const campos = [{
          attr: "ruc",
          value: cedula
        }, {
          attr: "password",
          value: password
        }];

        await consulta(VALIDAR, campos).then((res) => {
          const { data } = res;
          const { cod_user } = data;
          if (cod_user > 0) {
            handlerErrorUI(loginScreen.noExiste, seterrores, true)
            setValue('isLogin', true, setlogin)
            setuser(data);
          } else {
            handlerErrorUI(loginScreen.noExiste, seterrores, false)
          }
        }).
          catch(e => {
            handlerErrorUI(loginScreen.noExiste, seterrores, false)
            setTimeout(() => handlerErrorUI(loginScreen.noExiste, seterrores, true), 1000);
          })
      }

      setIsLoading(false);
      setactive(false);

    }

    active === true ? await iniciarSesionTest() : null

    return () => {
      setIsLoading(false);
      setactive(false)
    }

  }, [active, errores])




  const someErrorForThisScreen = haveThisKeyValue(errores, 'screen',
    ViewsNames.LoginScreenName);

  const erroresLogin = someErrorForThisScreen ? errores.filter(({ screen }) =>
    screen === ViewsNames.LoginScreenName) : [];
    
  const erroresComponent = erroresLogin.length > 0 ?
    erroresLogin.map(({ error }, i) =>
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
            onPress={() => { setactive(true) }}
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
