import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import {
  handlerErrores, handlerRemoveErrores
} from '../utils/ErroresHandlers.js';
import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';
import { stylesApp } from '../const/styles.js';
import { Spinner } from '../componentes/ui/Spinner.js'
import { getRuleFormat, LOGINRULES, RULESLENGTH, RULESSTRING } from '../const/Rules.js';
import { useCampoWithRules } from '../utils/HooksCustom.js';


const { loginScreen } = ERRORS;

const consulta = async (url, whereClause) => {
  return await axios.post(url, { whereClause: whereClause });
}

const whoIsThisIdentificador = (identificador) => {
  console.log(identificador, "relow");
  if (!identificador) {
    return 'na';
  }

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

  const lengthOfIdentificador = value ? value.length : 0;
  if (lengthOfIdentificador == 0) { return false };
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




/*Render*/
const LoginScreen = ({ isLoading, setIsLoading, setlogin, login, errores,
  setuser, seterrores }) => {

  const { cedula, password } = login;

  const [activate, setActivate] = useState(false)

  const [ci, setCedula, erroresCedula, setRules] = useCampoWithRules(cedula);

  const [pw, setPassword, erroresPassword, setRulesPassword] = useCampoWithRules(password);

  const [errors, setErrors] = useState([]);

  const rulesCedula = useMemo(() => {
    return (getRuleFormat({
      validator: validatorCampo,
      params: {
        value: whoIsThisIdentificador(ci),
        typeOfrule: RULESSTRING.equalBetween,
        valueOfRule: { a: 'cedula', b: 'ruc' },
        trowError: loginScreen.limiteCaracteres
      }
    }))
  }, [ci]);

  const rulesPassword = useMemo(() => {
    return (getRuleFormat({
      validator: validatorCampo,
      params: {
        value: pw,
        typeOfrule: RULESLENGTH.min,
        valueOfRule: 2,
        trowError: loginScreen.limiteCaracteres.createCustoError("La contraseña no tiene el tamaño minimo", '1002')
      }
    }))
  }, [pw]);

  useEffect(() => {
    setRulesPassword(rulesPassword);
  }, [pw])

  useEffect(() => {
    setRules(rulesCedula);
  }, [ci])

  useEffect(() => {
    setErrors([...erroresPassword, ...erroresCedula]);
  }, [erroresPassword, erroresCedula])

  const Spinn = useCallback(() => {
    if (activate) {
      return (
        <Spinner></Spinner>
      );
    }
    return null;
  }, [activate])

  const r=useCallback(()=>{
     
  },[activate])
  
  // useEffect(() => {
  //   if (activate && errors.length == 0) {
  //     alert('1')
  //   } else if (activate && errors.length > 0) {
  //     alert('2')
  //     setErrors((prev)=>[...prev,loginScreen.verifiqueLosDatos]);
  //   }  
    
  // }, [activate, errors])

  const ErroresComponentes = useCallback(
    () => {
      if (errors.length > 0) {
        const erroresRender = errors.map((e) => (
          <View key={e.cod}>
            <Text>
              {e.error}
            </Text>
          </View>))
        return (
          <View>
            {erroresRender}
          </View>
        );
        
      }else{
        return(<View>
          <Text>NAda</Text>
        </View>);
      }


    },
    [errors]
  )

  return (
    <ScrollView>
      <View style={{
        paddingTop: 10, justifyContent: 'center',
        marginBottom: 0,
        alignItems: 'center'
      }}>

        <ErroresComponentes></ErroresComponentes>
        <Spinn></Spinn>

      </View>
      <View style={styles.container}>


        <Text style={styles.titulo}>INICIAR SESION</Text>
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          icon="camera"
          label="Cedula"
          mode="outlined"
          defaultValue={ci}
          onChangeText={(e) => {
            setCedula(e);
          }}
        />
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          label="Contraseña"
          mode="outlined"
          defaultValue={pw}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <View style={styles.containerBotones}>
          <Text style={stylesApp.text}>¿Olvidaste la contraseña?</Text>
          <BotonComponente
            texto="Iniciar Sesión"
            onPress={() => { setActivate(true) }}
            estilo={styles.btnSecondary}
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
