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
import CuponNegocio from '../componentes/CuponNegocio';
import ItemCiudad from '../componentes/ItemCiudad';
import UltimaSucursal from '../componentes/UltimaSucursal';
import {stylesApp} from '../const/styles.js';
import Icon from 'react-native-vector-icons/Feather';

const CIUDADES_LISTS = [
  {
    id: 1,
    ciudad: 'Quito',
    cantidadSucursales: 12,
  },
  {
    id: 2,
    ciudad: 'Guayaquil',
    cantidadSucursales: 12,
  },
  {
    id: 3,
    ciudad: 'Loja',
    cantidadSucursales: 12,
  },
  {
    id: 4,
    ciudad: 'Cuenca',
    cantidadSucursales: 12,
  },
];

const PerfilScreen = ({drawer, menu, navigation,user,setlogin}) => {
  
  const {ruc,nombre_completo,telefono,email}=user;
  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView style={stylesApp.container}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{width: '70%'}}>
            <Text style={stylesApp.textTitle}>MI PERFIL</Text>
          </View>          
        </View>
        <View style={{flex: 1}}>
          <View style={{paddingTop: 16}}>
            <Card style={styles.card}>
              <Avatar.Image
                style={{alignSelf: 'center'}}
                size={107}
                source={require('../assets/avatar.jpg')}
              />
              <Text style={stylesApp.subTitle}>
               {nombre_completo}
              </Text>
              <Text style={stylesApp.subTitle}>RUC: {ruc}</Text>
            </Card>
          </View>
        </View>
        <View style={{flex: 2, paddingTop: 22, justifyContent: 'center'}}>
          <Card style={styles.card}>
            <Text style={stylesApp.subTitle}>Numero: {telefono}</Text>
            <Text style={stylesApp.subTitle}>Correo: {email}</Text>
            <Text style={stylesApp.subTitle}>Pais: Ecuador</Text>
            <Text style={stylesApp.subTitle}>Ciudad: Quito</Text>
            <Text style={stylesApp.subTitle}>Contraseña: ************</Text>
          </Card>
        </View>
        <View style={{paddingTop: 16}}>
          <Button style={stylesApp.btnPrimaryCuadrado} onPress={()=>setlogin(false)} mode="contained">
            Salir
          </Button>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
  },
});

export default PerfilScreen;

{
  /* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */
}
