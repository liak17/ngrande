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


const EstadoUsuarioScreen = ({drawer, menu,navigation}) => {
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
          <Text style={stylesApp.textTitle}>MI ESTADO</Text>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 16}}>
                <CartaNombre
                cedula='182789217927'
                nombre='Nombre en el estado'
                numero='18098129'
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
        <Button style={stylesApp.btnPrimaryCuadrado} mode='contained'>
            ENVIAR PAGO
        </Button>
        </View>
        
          
        </ScrollView>
      
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({

  card: {
  alignItems: 'center',
  paddingVertical:16,
  justifyContent: 'center'
  },
});

export default EstadoUsuarioScreen;

{/* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */}