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
import {Card, Title, Avatar, Paragraph, Button} from 'react-native-paper';
import CuponNegocio from '../componentes/CuponNegocio';
import ItemCiudad from '../componentes/ItemCiudad';
import UltimaSucursal from '../componentes/UltimaSucursal';
import  { MenuSimple } from '../MyDrawer/menu';

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




const DashboardScreen = ({navigation}) => {
    
    
    const drawer= useRef(null);
   const [cupon, setState] = useState([]);
    const menu=MenuSimple;
  useEffect(() => {
    //carga los datos al inicio, aqui debemos traelo
  }, []);

  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  return (
    <DrawerLayoutAndroid
        
    renderNavigationView={menu}
        drawerPosition='left'
        drawerWidth={300}
        ref={drawer}
    >
      <View style={styles.contenedor}>
        <ScrollView>
          <Text style={styles.titulo}>MIS SUCURSALES</Text>
          <View style={{flex: 1}}>
            <Text style={styles.subtitulo}>Ordenar por Ciudad</Text>
            <View style={{paddingTop: 12}}>
              <ItemCiudad ciudad="Quito" numero="23" />
            </View>
          </View>
          <View style={{flex: 2}}>
            <Text
              style={styles.subtitulo}
              onPress={() => navigation.navigate('ListaCuponesScreen')}>
              Últimas Sucursales
            </Text>
            <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight>
          </View>

          <View style={{flex: 3}}>
            <Text
              style={styles.subtitulo}
              onPress={() => navigation.navigate('ListaCuponesScreen')}>
              Últimos Cupones
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
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  tituloSucursales: {
    fontSize: 14,
  },
  subtituloSucursales: {
    fontSize: 13,
  },
  contenedor: {
    flex: 1,
    marginTop: 26,
    marginLeft: 26,
    marginRight: 26,
    height: '100%',
    marginBottom: 16,
  },
});

export default DashboardScreen;
