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


const RedUsuarioScreen = ({drawer, menu,navigation}) => {
   const [cupon, setState] = useState([]);
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
          <Text style={stylesApp.textTitle}>MI RED</Text>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 16}}>
                <CartaNombre
                cedula='1729765465'
                nombre='Marco Diaz Gonzalez'
                />
                
            </View>
          </View>
          <View style={{flex: 2, paddingTop:22, justifyContent: 'center'}}>
            <Text style={stylesApp.subTitle}>
                Puntos Y Ganancias
            </Text>
            <Text style={stylesApp.subTitle2}>
                Puntos:  
                <CuadroTexto texto='190 pts'/>
            </Text>
            <Text style={stylesApp.subTitle2}>
                Ganancias: 
                <CuadroTexto texto='100 $'/>
            </Text>
            <Text style={stylesApp.subTitle}>
                Tus Links de Patrocinio
            </Text>
            <Text>
            <CuadroTexto texto="https://app.com/join/ECLA23 2"/>
            </Text>
            
            <Text style={stylesApp.subTitle}>
                RAMA A
            </Text>
            <Text>
            <CuadroTexto texto="https://app.com/join/ECLA23 2"/>
            </Text>
            <Button style={stylesApp.btnPrimaryCuadrado} mode="contained">
                VER RAMA
            </Button>
            <Text style={stylesApp.subTitle}>
                RAMA B
            </Text>
            <Text>
            <CuadroTexto texto="https://app.com/join/ECLA23 2"/>
            </Text>
            <Button style={stylesApp.btnPrimaryCuadrado} mode="contained">
                VER RAMA
            </Button>
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

export default RedUsuarioScreen;
