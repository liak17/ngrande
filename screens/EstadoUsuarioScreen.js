import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  DrawerLayoutAndroid,
} from 'react-native';
import {Avatar, Card, Button} from 'react-native-paper';
import CuadroDoble from '../componentes/CuadroDoble.js';
import CartaNombre from '../componentes/CartaNombre';
import { stylesApp} from '../const/styles.js';


const EstadoUsuarioScreen = ({drawer, menu,navigation,user}) => {
  
  const {cedula, nombre_completo, telefono}=user;

  function handleOnPress() {
   
  }

  return (
    <DrawerLayoutAndroid        
      renderNavigationView={()=>menu}
        drawerPosition='left'
        drawerWidth={300}
        ref={drawer}
    >
      
        <ScrollView style={stylesApp.container}>
          <Text style={stylesApp.textTitle}>MI ESTADO</Text>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 16}}>
                <CartaNombre
                cedula={cedula}
                nombre={nombre_completo}
                numero={telefono}
                />
                
            </View>
          </View>
          <View style={{flex: 2, paddingTop:22, justifyContent: 'center'}}>
            <Text style={stylesApp.subTitle}>
                Proximo Pago Anual: --/--/----
            </Text>
            <Text style={stylesApp.subTitle}>
                Proximo Pago Mensual: --/--/----
            </Text>
          </View>
        <View style={{paddingTop:16}}>
        <Button style={stylesApp.btnPrimaryCuadrado} onPress={()=>alert('no disponible,Estamos construyendo un app nGrande')} mode='contained'>
            ENVIAR PAGO
        </Button>
        </View>
        
          
        </ScrollView>
      
    </DrawerLayoutAndroid>
  );
};


export default EstadoUsuarioScreen;
