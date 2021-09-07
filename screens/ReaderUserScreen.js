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
import {Avatar, Card, Button, Paragraph, Title,} from 'react-native-paper';
import CuadroDoble from '../componentes/CuadroDoble.js';
import CartaNombre from '../componentes/CartaNombre';
import CuadroTexto from '../componentes/CuadroTexto';
import { stylesApp} from '../const/styles.js';


const ReaderUserScreen = ({drawer, menu,navigation,user}) => {
   const {cedula, nombre_completo}= user;
  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  return (
    <DrawerLayoutAndroid        
      renderNavigationView={()=>menu}
        drawerPosition='left'
        drawerWidth={300}
        ref={drawer}
    >
      
        <ScrollView style={stylesApp.container}>
          <Text style={stylesApp.textTitle}>Reader</Text>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 16}}>
                <CartaNombre
                cedula={cedula}
                nombre={nombre_completo}
                />
                
            </View>
          </View>
          <View style={{flex: 2, paddingTop:22, justifyContent: 'center'}}>
            <Text>Pronto podras enterarte de que trata este proyecto Ngrande</Text>
          </View>
        
          
        </ScrollView>
      
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({

  card: {
  alignItems: 'center',
  marginLeft:16,
  justifyContent: 'center'
  },
});

export default ReaderUserScreen;
