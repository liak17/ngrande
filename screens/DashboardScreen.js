import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import CuponNegocio from '../componentes/CuponNegocio';
import ItemCiudad from '../componentes/ItemCiudad';
import UltimaSucursal from '../componentes/UltimaSucursal';
import { stylesApp } from '../const/styles.js';
import TextoVerTodas from '../componentes/TextoVerTodas';
import { ListaCupones } from '../componentes/ListOfCupones.js';
import { getCiudadesFromSucursales } from '../utils/index.js'
import {  GETCUPONES, GETSUCURSALES } from '../const/Urls.js';
import * as ViewsNames from '../const/ViewsNames.js';


const DashboardScreen = ({
  drawer,
  menu,
  navigation,
  codNegocio,
  setCurrentCuponSelected,
  setCurrentSucursalSelected,
  setDataSucursales,
  setDataCupones
}) => {
  const [dataInitSucursales, setDataInitSucursales] = useState(null);
  const [dataInitCupones, setDataInitCupones] = useState(null);
  const [ciudadesXSucursales, setCiudadesXSucursales] = useState(null)
  const [refresh, setrefresh] = useState(false);


  useEffect(async () => {
    const consultarCuponesRecientes = async () => {
      try {
        const url = GETCUPONES;
        const whereClause = {
          whereClause: [{ attr: 'negocioCodNegocio', value: codNegocio }],
        };
        const resultado = await axios.post(url, whereClause);
        const cupones = resultado.data;
        setDataInitCupones(cupones);
        setDataCupones(cupones);
      } catch (error) {
        alert('algo salio mal');
      }
    };
    const consultarSucursalesRecientes = async () => {
      try {
        const url = GETSUCURSALES;
        const whereClause = {
          whereClause: [{ attr: 'negocioCodNegocio', value: codNegocio }],
        };
        const resultado = await axios.post(url, whereClause);
        const sucursales = resultado.data;

        setDataInitSucursales(sucursales);
        setDataSucursales(sucursales)
        //set preformated sucursales cantidad
        const sucursalesXciudad = getCiudadesFromSucursales(sucursales);
        setCiudadesXSucursales(sucursalesXciudad);
      } catch (error) {
        alert('algo salio mal');
      }
    };
    dataInitCupones === null ? await consultarCuponesRecientes() : null;
    dataInitSucursales === null ? await consultarSucursalesRecientes() : null;
  });

  const onRefreshHandler = () => {
    setrefresh(true);
  };

  function handleOnPressCupon(item) {
    setCurrentCuponSelected(item);
    navigation.navigate(ViewsNames.CuponScreenName);
  }
  function handleOnPresssSucursal(item) {
    setCurrentSucursalSelected(item);
    navigation.navigate(ViewsNames.SucursalScreenName)
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView style={stylesApp.container}>
        <Text style={stylesApp.textTitle}>MIS SUCURSALES</Text>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '70%' }}>
            <Text style={stylesApp.subTitle}>Ordenar por Ciudad</Text>
          </View>
          <TextoVerTodas
            onPress={() =>{
              alert('Pronto estara disponible esta sección');
              // navigation.navigate(ViewsNames.ListaCiudadesScreenName)
            }}
          />
        </View>
        <View style={{ paddingTop: 12 }}>
          <FlatList
            horizontal={true}
            data={ciudadesXSucursales}
            keyExtractor={item => item.ciudadeCodCiudad}
            renderItem={({ item }) => {
              return (
                <ItemCiudad
                  ciudad={item}
                  onPress={handleOnPressCupon} />
              )
            }}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '70%' }}>
            <Text
              style={stylesApp.subTitle}
            >
              Últimas Sucursales
            </Text>
          </View>

          <TextoVerTodas
           onPress={() => {
             return alert('Pronto estara disponible esta sección')
             //navigation.navigate(ViewsNames.SucursalScreenName)
           }
          }
           
          />
        </View>
        <FlatList
          data={dataInitSucursales}
          horizontal={true}
          keyExtractor={item => item.cod_sucursal}
          renderItem={({ item }) => (
            <UltimaSucursal
              sucursal={item}
              handlerOnPress={() => handleOnPresssSucursal(item)}
            />
          )}></FlatList>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '70%' }}>
            <Text
              style={stylesApp.subTitle}
             >
              Últimos Cupones
            </Text>
          </View>
          <TextoVerTodas
            onPress={() => navigation.navigate(ViewsNames.ListaCuponesScreenName)}
          />

        </View>
        <FlatList

          renderItem={({ item }) => (
            <CuponNegocio
              cupon={item}
              handlerOnPress={() => handleOnPressCupon(item)}
            />
          )}
          data={dataInitCupones}
          keyExtractor={item => item.cod_cupon}
          ListEmptyComponent={<Text>NADA Aùn</Text>}
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

export default DashboardScreen;
