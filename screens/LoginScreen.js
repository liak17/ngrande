import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import BotonComponente from '../componentes/BotonComponente';
import { VALIDAR } from '../const/Urls.js';
import { ERRORS } from '../const/Errors.js';
import { stylesApp } from '../const/styles.js';
import { Spinner } from '../componentes/ui/Spinner.js'
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
const LoginScreen = ({ setlogin,login, setuser }) => {

  
  const [firstFocusCi, setFirstFocusCi] = useState(false);

  const [firstFocusPw, setFirstFocusPw] = useState(false);

  const [activate, setActivate] = useState(false)

  const [ci, setCedula, erroresCedula, setRulesCedula] = useCampoWithRules("");

  const [pw, setPassword, erroresPassword, setRulesPassword] = useCampoWithRules("");

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

    if (firstFocusPw) {
      setRulesPassword(rulesPassword);
    }

  }, [pw, firstFocusPw])

  useEffect(() => {

    if (firstFocusCi) {
      setRulesCedula(rulesCedula);
    }

  }, [ci, firstFocusCi])

  useEffect(() => {

    setErrors([...erroresCedula, ...erroresPassword]);
  }, [erroresPassword, erroresCedula])



  const loginUser = async () => {

    const isActivate = activate;
    const userDoFirstActions=errors.length === 0 && firstFocusCi && firstFocusPw;
    setActivate(!isActivate)
    console.log(whoIsThisIdentificador(ci))
    if (userDoFirstActions) {
      const campos = [{
        attr: whoIsThisIdentificador(ci),
        value: ci
      }, {
        attr: "password",
        value: pw
      }];
      await consulta(VALIDAR, campos).then(res => {
        const { cod_user } = res.data;
        if (cod_user === 0) {
          alert('Verifica el usuario o la contraseña ');
        } else {
          setuser(res.data)
          setlogin(prev => {
            const currentData=prev;
             return setlogin(true);

             })
        }


      }).
        catch(e => {
          alert('Verifica el usuario o la contraseña ');
        })

    } else {
      alert('Ingresa el usuario y contraseña')
    }
    setActivate(false);

  }



  return (
    <ScrollView>
      <View style={{
        paddingTop: 10, justifyContent: 'center',
        marginBottom: 0,
        alignItems: 'center'
      }}>
        <ErroresComponent errores={errors}></ErroresComponent>
        <Spinner isLoading={activate} />
      </View>

      <View style={styles.container}>

        <Text style={styles.titulo}>INICIAR SESION</Text>
        <TextInput
          style={stylesApp.inputStyle}
          outlineColor="#ffff"
          icon="camera"
          label="Cedula"
          mode="outlined"
          defaultValue={"22270222138"}
          onFocus={() => setFirstFocusCi(true)}
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
          onFocus={() => setFirstFocusPw(true)}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <View style={styles.containerBotones}>
          <Text style={stylesApp.text}>¿Olvidaste la contraseña?</Text>
          <BotonComponente
            texto="Iniciar Sesión"
            onPress={() => {

              loginUser()
            }}
            estilo={styles.botonSecundario}
          />

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

  },
  titulo: {
    fontSize: 48,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 16,
    marginTop: 200,
    marginBottom: 16,
  }
});

export default LoginScreen;
