import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';
import { stylesApp } from '../const/styles.js';
import { Spinner } from '../componentes/ui/Spinner.js'
import Icon from 'react-native-vector-icons/Feather';
import { getRuleFormat, LOGINRULES, RULESLENGTH, RULESSTRING } from '../const/Rules.js';
import { useCampoWithRules } from '../utils/HooksCustom.js';
import { ErroresComponent } from '../componentes/ErroresComponent.js'

const { loginScreen } = ERRORS;

const consulta = async (url, whereClause) => {
  return await axios.post(url, { whereClause: whereClause });
}


const whoIsThisIdentificador = (identificador) => {

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
const LoginScreen = ({ setlogin, login, setuser }) => {


  const [firstFocusCi, setFirstFocusCi] = useState(false);

  const [firstFocusPw, setFirstFocusPw] = useState(false);

  const [activate, setActivate] = useState(false)

  const [docIdentidad, setDocIdentidad, erroresDocIdentidad, setRulesDocIdentidad] = useCampoWithRules("");

  const [pw, setPassword, erroresPassword, setRulesPassword] = useCampoWithRules("");

  const [errors, setErrors] = useState([]);

  const rulesCedula = useMemo(() => {
    return (getRuleFormat({
      validator: validatorCampo,
      params: {
        value: whoIsThisIdentificador(docIdentidad),
        typeOfrule: RULESSTRING.equalBetween,
        valueOfRule: { a: 'cedula', b: 'ruc' },
        trowError: loginScreen.limiteCaracteres
      }
    }))
  }, [docIdentidad]);

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

    if (firstFocusPw) {
      setRulesPassword(rulesPassword);
    }

  }, [pw, firstFocusPw])

  useEffect(() => {

    if (firstFocusCi) {
      setRulesDocIdentidad(rulesCedula);
    }

  }, [docIdentidad, firstFocusCi])

  useEffect(() => {

    setErrors([...erroresDocIdentidad, ...erroresPassword]);
  }, [erroresPassword, erroresDocIdentidad])



  const loginUser = async () => {

    const isActivate = activate;
    const userDoFirstActions = errors.length === 0 && firstFocusCi && firstFocusPw;
    setActivate(!isActivate)

    if (userDoFirstActions) {

      const campos = [{
        attr: whoIsThisIdentificador(docIdentidad),
        value: docIdentidad
      }, {
        attr: "password",
        value: pw
      }];
      console.log(campos);
      await consulta(VALIDAR, campos).then(res => {
        const { cod_user } = res.data;
        console.log(res.data);
        console.log("here");
        if (cod_user === 0) {
          alert('Verifica el usuario o la contraseña ');
        } else {
          setuser(res.data)
          setlogin(prev => {
            const currentData = prev;
            return setlogin(true);

          })
        }

      }).catch(e => {
        alert('Verifica el usuario o la contraseña ');
        console.log(e);
      })

    } else {
      alert('Ingresa el usuario y contraseña')
    }
    setActivate(false);

  }



  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={{
        paddingTop: 10, justifyContent: 'center',
        marginBottom: 0,
        alignItems: 'center'
      }}>
        <ErroresComponent errores={errors}></ErroresComponent>
        <Spinner isLoading={activate} />
      </View>

      <View style={styles.container}>

        <Text style={styles.titulo}>INICIAR SESIÓN</Text>

        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          left={<TextInput.Icon name={() => <Icon name="mail" size={24} color='#000000' />} />}
          label="Cedula"
          maxLength={13}
          keyboardType='number-pad'
          mode="outlined"
          defaultValue={"22270222138"}
          onFocus={() => setFirstFocusCi(true)}
          onChangeText={(e) => {
            setDocIdentidad(e.trimEnd());
          }}
        />
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          label="Contraseña"
          mode="outlined"
          left={<TextInput.Icon name={() => <Icon name="lock" size={24} color='#000000' />} />}
          defaultValue={pw}
          onFocus={() => setFirstFocusPw(true)}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <View style={styles.containerBotones}>
          <Text onPress={()=>alert('no disponible por el momento')} style={stylesApp.text}>¿Olvidaste la contraseña?</Text>          
          <Button
            uppercase={false}
            dark={true}

            style={stylesApp.btnSecondary}
            mode='contained'
            onPress={() => { loginUser() }}
          ><Text style={stylesApp.txtBtnSecondary}>Iniciar Sesión</Text></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    paddingLeft: 16,
    borderBottomWidth: 1,
    alignContent: 'center',
    height: '100%',
    marginTop: 0
  },
  containerBotones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
    marginBottom: 29
  },
  titulo: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    marginTop: 16,
    marginTop: 200,
    marginBottom: 16,
  }
});

export default LoginScreen;
