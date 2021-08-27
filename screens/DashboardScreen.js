import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';
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
import { stylesApp } from '../const/styles.js';
import { ListaCupones } from '../componentes/ListOfCupones.js'
import { GET_NEGOCIO, GETCUPONES, GETSUCURSALES } from '../const/Urls.js'
import * as ViewsNames from '../const/ViewsNames.js';
const SUCURSALES_LIST = [
  {
    id: 1,
    cod_sucursal: 1,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 2,
    cod_sucursal: 2,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 3,
    cod_sucursal: 3,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 4,
    cod_sucursal: 4,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
]

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
]



const DashboardScreen = ({ drawer, menu, navigation, negocioData, setCurrentCuponSelected, setCurrentSucursalSelected }) => {


  const [dataInitSucursales, setdataInitSucursales] = useState(null)
  const [dataInitCupones, setDataCupones] = useState(null);

  const [refresh, setrefresh] = useState(false)



  useEffect(async () => {
    const consultarCuponesRecientes = async () => {
      try {
        const url = GETCUPONES;
        const whereClause = ({ whereClause: [{ attr: "negocioCodNegocio", value: negocioData }] })
        const resultado = await axios.post(url, whereClause);
        const cupones = resultado.data;
        setDataCupones(cupones);
      } catch (error) {
        alert('algo salio mal');
      }
    }
    const consultarSucursalesRecientes = async () => {
      try {
        const url = GETSUCURSALES;
        const whereClause = ({ whereClause: [{ attr: "negocioCodNegocio", value: negocioData }] })
        const resultado = await axios.post(url, whereClause)
        const sucursales = resultado.data;
        setdataInitSucursales(sucursales);
      } catch (error) {
        alert('algo salio mal');
      }
    }
    dataInitCupones === null ? await consultarCuponesRecientes() : null;
    dataInitSucursales === null ? await consultarSucursalesRecientes() : null;
  })

  const onRefreshHandler = () => {
    setrefresh(true)
  }

  function handleOnPressCupon(item) {
    setCurrentCuponSelected(item);
    navigation.navigate(ViewsNames.CuponScreenName)
  }
  function handleOnPresssSucursal(item) {
    setCurrentSucursalSelected(item);
    navigation.navigate(ViewsNames.SucursalScreenName)
  }

    return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition='left'
      drawerWidth={300}
      ref={drawer}
    >

      <ScrollView style={stylesApp.container}>
        <Text style={stylesApp.textTitle}>MIS SUCURSALES</Text>
        
        <View >
          <Text style={stylesApp.subTitle}>Ordenar por Ciudad</Text>
          <View style={{ paddingTop: 12 }}>
            <FlatList
              horizontal={true}
              data={CIUDADES_LISTS}
              renderItem={({ item }) => (
                <ItemCiudad ciudad={item} onPress={handleOnPressCupon} />
              )}
            />
          </View>
        </View>
        
        <View >
          <Text
            style={stylesApp.subTitle}
            onPress={() => navigation.navigate(ViewsNames.SucursalScreenName)}>
            Últimas Sucursales
          </Text>
          <FlatList
            data={dataInitSucursales}
            horizontal={true}
            keyExtractor={item => item.cod_sucursal}
            renderItem={({ item }) => (
              <UltimaSucursal
                sucursal={item}
                handlerOnPress={()=>handleOnPresssSucursal(item)}
              />
            )}
          ></FlatList>

        </View>
        <View>

          <Text
            style={stylesApp.subTitle}
            onPress={() => navigation.navigate('ListaCuponesScreen')}>
            Últimos Cupones
          </Text>
          <FlatList
            
            renderItem={({ item }) => (
              <CuponNegocio cupon={item}
                handlerOnPress={() => handleOnPressCupon(item)} />)}
            data={dataInitCupones}
            keyExtractor={item => item.cod_cupon}
            ListEmptyComponent={<Text>NADA Aùn</Text>}
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

export default DashboardScreen;

