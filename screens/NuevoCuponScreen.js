import axios from 'axios';
import React, { useEffect, useState,useCallback } from 'react';

import {
  View,
  Text,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import { Title, Card, TextInput, Button } from 'react-native-paper';

import { stylesApp } from '../const/styles.js';

import {CREAR_CUPON} from '../const/Urls.js';
const NuevoCuponScreen = ({ navigation, menu, drawer,codNegocio }) => {
  const [createCupon, setcreateCupon] = useState(false);
  const [cuponInformation, setcuponInformation] = useState({titulo: "", descripcion: "", precio:"", precio_descuento: "",}) ;
  const saveDataCupon=useCallback(
    ()=>{
      setcreateCupon(true);
      setTimeout(() => {
        setcreateCupon(false);
      }, 1000);
    }
  )
  useEffect(() => {
      const crearCuponDB=async() =>{
      
        try {
          const url=CREAR_CUPON;          
          const dataCupon=Object.assign({negocioCodNegocio:codNegocio}, cuponInformation); 
          const resultado=await axios.post(url,dataCupon);
          console.log(resultado);
          alert('Cupon creado con exito');
        } catch (error) {
          console.log(error);
        }  
      }
      createCupon?crearCuponDB():null;
  }, [createCupon]);


  const setAttr=(attr,value)=>{
    setcuponInformation(prev=>{
      const currentObject=Object.assign({},prev);
      currentObject[attr]=value;
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
          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Título" 
            maxSize={50}            
            onChangeText={(e) =>setAttr('titulo',e)}  
            defaultValue={`${cuponInformation.titulo}`} 
            />
            
            <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Descripción"
            maxSize={250}
            multiline={true}
            onChangeText={(e) =>setAttr('descripcion',e)}
            defaultValue={`${cuponInformation.descripcion}`}
          />         
        
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Precio Normal"
            keyboardType="number-pad"
            maxSize={8}
            onChangeText={(e) =>setAttr('precio',e)}
            defaultValue={`${cuponInformation.precio}`}
          />
          <TextInput
            mode="outlined"            
            style={stylesApp.inputTextMarginTop}
            maxSize={8}
            label="Precio con Descuento"
            keyboardType="number-pad"
            onChangeText={(e) =>setAttr('precio_descuento',e)}
            defaultValue={`${cuponInformation.precio_descuento}`}
          />
          <View style={{ marginTop: 16 }}>
            <Button
              style={stylesApp.btnPrimaryCuadrado}
              onPress={()=>saveDataCupon()}
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
