import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import { Title, Card, TextInput, Button } from 'react-native-paper';

import { stylesApp } from '../const/styles.js';
import { ErroresComponent } from '../componentes/ErroresComponent'
import { ERRORS } from '../const/Errors.js'
import { CREAR_CUPON } from '../const/Urls.js';
import { validateFieldRage } from '../utils/index.js';

const isValidateFields = (rules) => {
  const isValidFields =[] ;
  rules.forEach(rule => {
    const { validator, attr, min, max } = rule;
    const isFieldValidate = validator(attr, min, max);
    isValidFields.push(isFieldValidate);
  });
  const reducer=(accumulator,current)=>accumulator&&current;
  const isValidAllFields=isValidFields.reduce(reducer)
  return  isValidAllFields ;
}

const createErrorsFromFields=(rules,setErrores)=>{
  
  rules.forEach((rule,i)=>{
    const { validator, attr, min, max,nameAtrr } = rule;
    const isFieldValidate = validator(attr, min, max);        
    const indexCreate=i>0?i:rules.length+2;
    const codErrorCustom=(102+indexCreate);
    console.log(codErrorCustom,isFieldValidate,rule);
    if (!isFieldValidate) {            
      const errorCustom=ERRORS.nuevoCuponScreen.tipoDeDatoIncorrecto.createCustoError(`el campo ${nameAtrr} debe tener una longitud minima ${min} y como maximo ${max}`,codErrorCustom);
      setErrores(prev => {
        const haveThisError = prev.some(error => error.cod === codErrorCustom);
        const currentErrores = [...prev, errorCustom]
        return haveThisError ? prev : currentErrores;
      });      
    }else{
      setErrores(prev => {
        const deleteError = prev.filter(error => error.cod !== codErrorCustom);
        return deleteError;
      });
    }
  });
  
}

const NuevoCuponScreen = ({ navigation, menu, drawer, codNegocio }) => {
  const [createCupon, setcreateCupon] = useState(false);
  const [cuponInformation, setcuponInformation] = useState({ titulo: "", descripcion: "", precio: "", precio_descuento: "", });
  const [errores, setErrores] = useState([])

  const saveDataCupon = useCallback(
    () => {
      const currentCuponInfo = Object.assign({}, cuponInformation);
      const { titulo, descripcion, precio, precio_descuento } = currentCuponInfo;
      const rules = [
        { validator: validateFieldRage, attr: titulo,nameAtrr:"titulo", min: 3, max: 25 },
        { validator: validateFieldRage, attr: descripcion,nameAtrr:"descripcion", min: 10, max: 250 },
        { validator: validateFieldRage, attr: precio, min: 1,nameAtrr:"precio", max: 6 },
        { validator: validateFieldRage, attr: precio_descuento, nameAtrr:"precio_descuento",min: 1, max:6 }
      ];

      createErrorsFromFields(rules,setErrores)
      const isValidateAllFields=isValidateFields(rules);
      if (isValidateAllFields) {
        setcreateCupon(true);
        
      }
      setTimeout(() => {
        setcreateCupon(false);
      }, 1000);

    }, [cuponInformation]
  )
  useEffect(() => {
    const crearCuponDB = async () => {

      try {
        const url = CREAR_CUPON;
        const dataCupon = Object.assign({ negocioCodNegocio: codNegocio }, cuponInformation);
        const resultado = await axios.post(url, dataCupon);
        console.log(resultado);
        alert('Cupon creado con exito');
      } catch (error) {
        console.log(error);
      }
    }
    createCupon ? crearCuponDB() : null;
  }, [createCupon]);


  const setAttr = (attr, value) => {
    setcuponInformation(prev => {
      const currentObject = Object.assign({}, prev);
      currentObject[attr] = value;
      return currentObject;
    });
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>

      <ScrollView>

        <View style={stylesApp.container}>

          <Title style={stylesApp.textTitle}>Nuevo Cupón</Title>
          <ErroresComponent
            errores={errores}
          />

          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Título"
            maxSize={50}
            onChangeText={(e) => {
              setAttr('titulo', e)
            }}
            defaultValue={`${cuponInformation.titulo}`}
          />

          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Descripción"
            maxSize={250}
            multiline={true}
            onChangeText={(e) => setAttr('descripcion', e)}
            defaultValue={`${cuponInformation.descripcion}`}
          />

          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Precio Normal"
            keyboardType="number-pad"
            maxSize={8}
            onChangeText={(e) => setAttr('precio', e)}
            defaultValue={`${cuponInformation.precio}`}
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            maxSize={8}
            label="Precio con Descuento"
            keyboardType="number-pad"
            onChangeText={(e) => setAttr('precio_descuento', e)}
            defaultValue={`${cuponInformation.precio_descuento}`}
          />
          <View style={{ marginTop: 16 }}>
            <Button
              style={stylesApp.btnPrimaryCuadrado}
              onPress={() => saveDataCupon()}
              compact={true}
              mode="contained">
              <Text style={stylesApp.textButtons}>Crear Nuevo Cupón</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default NuevoCuponScreen;
