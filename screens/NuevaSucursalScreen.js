import axios from 'axios';
import React,{useState,useCallback, useEffect} from 'react';
import {
  View,
  Text,  
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import {Title, Card, TextInput, Button} from 'react-native-paper';
import { ErroresComponent } from '../componentes/ErroresComponent.js';
import { ERRORS } from '../const/Errors.js';
import {stylesApp} from '../const/styles.js';
import { CREAR_SUCURSAL } from '../const/Urls.js';
import { validateFieldExactLength, validateFieldRage } from '../utils/index.js';
/*esto deberia estar dentro de una abstraccion por tema de tiempo 
no lo esta, este codigo esta en nuevoCuponScreen */
const isValidateFields = (rules) => {
  const isValidFields =[] ;
  rules.forEach(rule => {
    const { validator, attr, min, max } = rule;    
    const isFieldValidate = min===max?validator(attr,max): validator(attr, min, max);        
    isValidFields.push(isFieldValidate);
  });
  const reducer=(accumulator,current)=>accumulator&&current;
  const isValidAllFields=isValidFields.reduce(reducer)
  return  isValidAllFields ;
}

const createErrorsFromFields=(rules,setErrores)=>{
  
  rules.forEach((rule,i)=>{
    const { validator, attr, min, max,nameAtrr } = rule;    
    const isFieldValidate = min==max?validator(attr,max): validator(attr, min, max);        
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

const NuevaSucursalScreen = ({navigation, menu, drawer,codNegocio}) => {
  const [createSucursal,setCreateSucursal]  = useState(false);
  const [sucursalInformation, setSucursalInformation] = useState({direccion:"",telefono:"",imagen:"a.png",estado:1,negocioCodNegocio:codNegocio,ciudadeCodCiudad:5});
    const [errores, setErrores] = useState([]);
    
    useEffect(() => {
      const crearSucursalDB = async () => {
  
        try {
          const url = CREAR_SUCURSAL;
          const dataSucursal = Object.assign({}, sucursalInformation);
          const resultado = await axios.post(url, dataSucursal);
          console.log(resultado);
          alert('Sucursal creado con exito');
        } catch (error) {
          console.log(error);
        }
      }
      createSucursal ? crearSucursalDB() : null;
    }, [createSucursal]);
  

    const saveDataSucursal = useCallback(
      () => {
        const currentSucursalInfo = Object.assign({}, sucursalInformation);
        const { direccion, telefono,ciudadeCodCiudad } = currentSucursalInfo;
        const rules = [
          { validator: validateFieldRage, attr: direccion,nameAtrr:"Direccion", min: 10, max: 70 },
          { validator:(attr,val)=>attr.length===val, attr: telefono,nameAtrr:"Telefono", min: 10, max: 10}
        ];
  
        createErrorsFromFields(rules,setErrores);
        
        const isValidateAllFields=isValidateFields(rules);
        
        if (isValidateAllFields) {
          setCreateSucursal(true);          
        }

        setTimeout(() => {
          setCreateSucursal(false);
        }, 1000);
  
      }, [sucursalInformation]
    )

  /*Esto tambien deberia estar abstraido  */
    const setAttr = (attr, value) => {
      setSucursalInformation(prev => {
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
          <Title style={stylesApp.textTitle}>Nueva Sucursal</Title>
          <ErroresComponent
            errores={errores}
          />
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>          
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Direccion"
            maxLength={70}
            onChangeText={(e) => {
              setAttr('direccion', e)
            }}
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Telefono"
            maxLength={10}
            onChangeText={(e) => {
              setAttr('telefono', e)
            }}
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Ciudad"            
          />
          <View style={{marginTop:16}}>
          <Button style={stylesApp.btnPrimaryCuadrado} mode="contained" 
          onPress={() =>saveDataSucursal()}>
          <Text style={stylesApp.textButtons}>Crear Sucursal</Text>
          </Button>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default NuevaSucursalScreen;
