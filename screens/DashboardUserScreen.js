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
import Icon from 'react-native-vector-icons/Feather';

import CuponNegocio from '../componentes/CuponNegocio';
import ItemCiudad from '../componentes/ItemCiudad';
import TextoVerTodas from '../componentes/TextoVerTodas';
import UltimaSucursal from '../componentes/UltimaSucursal';
import {stylesApp} from '../const/styles.js';

const CUPON_LIST = [
  {
    id: 1,
    titulo: 'Zapatos marca nike',
    precio: 23,
    imagen: 'https://picsum.photos/650',
    precio_descuento: 10,
  },
  {
    id: 2,
    titulo: 'Tacones rojos de chanel',
    precio: 23,
    imagen: 'https://picsum.photos/500',
    precio_descuento: 10,
  },
  {
    id: 3,
    titulo: 'Deportivos adidaas',
    precio: 23,
    imagen: 'https://picsum.photos/600',
    precio_descuento: 10,
  },
  {
    id: 4,
    titulo: 'Crocs amarillas',
    precio: 23,
    imagen: 'https://picsum.photos/700',
    precio_descuento: 10,
  },
];

const CIUDADES_LISTS = [
  {
    id: 1,
    ciudad: 'Tecnologia',
    cantidadSucursales: 12,
  },
  {
    id: 2,
    ciudad: 'Ropa',
    cantidadSucursales: 12,
  },
  {
    id: 3,
    ciudad: 'Zapatos',
    cantidadSucursales: 12,
  },
  {
    id: 4,
    ciudad: 'Camisas',
    cantidadSucursales: 12,
  },
];

const DashboardUserScreen = ({drawer, menu, navigation}) => {
  const [cupon, setState] = useState([]);
  function handleOnPress() {
    navigation.navigate('NegocioScreen');
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView style={stylesApp.container}>
        <Text style={stylesApp.textTitle}>DESCUENTOS</Text>

        <View style={{display: 'flex', flexDirection: 'row',}}>
          <View style={{width: '70%'}}>
            <Text
              style={stylesApp.subTitle}
              onPress={() => navigation.navigate('ListaCategoriasScreen')}
              >
              Ordenar por Categoría
            </Text>
          </View>
          
            <TextoVerTodas onPress={() => navigation.navigate('ListaCategoriasScreen')}/>
          
        </View>
        <View style={{paddingTop: 12}}>
          <FlatList
            horizontal={true}
            data={CIUDADES_LISTS}
            renderItem={({item}) => (
              <ItemCiudad ciudad={item} onPress={handleOnPress} />
            )}
          />
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{width: '70%'}}>
            <Text
              style={stylesApp.subTitle}
              onPress={() => navigation.navigate('ListaCuponesScreen')}>
              Últimas Promociones
            </Text>
          </View>
          <TextoVerTodas
          onPress={() => navigation.navigate('ListaCuponesScreen')}
          />
        </View>
        <FlatList
          data={CUPON_LIST}
          renderItem={({item}) => (
            <CuponNegocio cupon={item} onPress={handleOnPress} />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginTop: 26,
    marginLeft: 26,
    marginRight: 26,
    height: '100%',
    marginBottom: 16,
  },
});

export default DashboardUserScreen;

{
  /* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */
}
