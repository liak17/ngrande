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
import CuponNegocio from '../componentes/CuponNegocio';
import ItemCiudad from '../componentes/ItemCiudad';
import UltimaSucursal from '../componentes/UltimaSucursal';
import { stylesApp} from '../const/styles.js';

const CUPON_LIST = [
  {
    id: 1,
    tituloCupon: 'Zapatos marca nike',
    precioNormal: 23,
    imagen: 'https://picsum.photos/650',
    gana: 10,
  },
  {
    id: 2,
    tituloCupon: 'Tacones rojos de chanel',
    precioNormal: 23,
    imagen: 'https://picsum.photos/500',
    gana: 10,
  },
  {
    id: 3,
    tituloCupon: 'Deportivos adidaas',
    precioNormal: 23,
    imagen: 'https://picsum.photos/600',
    gana: 10,
  },
  {
    id: 4,
    tituloCupon: 'Crocs amarillas',
    precioNormal: 23,
    imagen: 'https://picsum.photos/700',
    gana: 10,
  },
];


const CIUDADES_LISTS = [
  {
    id:1,
    ciudad:'Tecnologia',
    cantidadSucursales:12,
  },
  {
    id:2,
    ciudad:'Ropa',
    cantidadSucursales:12,
  },
  {
    id:3,
    ciudad:'Zapatos',
    cantidadSucursales:12,
  },
  {
    id:4,
    ciudad:'Camisas',
    cantidadSucursales:12,
  },
]

const DashboardUserScreen = ({drawer, menu,navigation}) => {
   const [cupon, setState] = useState([]);
  function handleOnPress() {
    navigation.navigate('NegocioScreen');
  }

  return (
    <DrawerLayoutAndroid        
      renderNavigationView={()=>menu}
        drawerPosition='left'
        drawerWidth={300}
        ref={drawer}
    >
      
        <ScrollView style={stylesApp.container}>
          <Text style={stylesApp.textTitle}>DESCUENTOS</Text>
          <View style={{flex: 1}}>
            <Text style={stylesApp.subTitle} onPress={() => navigation.navigate('ListaCategoriasScreen')}>Ordenar por Categoría</Text>
            <View style={{paddingTop: 12}}>
              <FlatList
              horizontal={true}
              data={CIUDADES_LISTS}
                renderItem={({item}) =>(
                  <ItemCiudad ciudad={item} onPress={handleOnPress}/>
                )}
              />
            </View>
          </View>

          <View style={{flex: 3}}>
            <Text
              style={stylesApp.subTitle }
              onPress={() => navigation.navigate('ListaCuponesScreen')}>
              Últimas Promociones
            </Text>
            <FlatList
              data={CUPON_LIST}
              renderItem={({item}) => (
                <CuponNegocio cupon={item} onPress={handleOnPress} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          
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

{/* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */}