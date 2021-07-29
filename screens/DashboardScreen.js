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
import { GET_NEGOCIO ,GETCUPONES} from '../const/Urls.js'
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



const DashboardScreen = ({ drawer, menu, navigation, user, negocioData }) => {

  const [dataInit, setData] = useState(null);
  const [refresh, setrefresh] = useState(false)
  const [cupon, setState] = useState([]);

  
  useEffect(async () => { 
      
    const consultarCuponesRecientes=async()=>{

      try {
        
        const url=GETCUPONES;
        const whereClause=({whereClause:[{attr:"negocioCodNegocio",value:negocioData}]})
        const resultado =await axios.post(url,whereClause);
        const cupones=resultado.data;
        setData(cupones);

      } catch (error) {
        alert('algo salio mal');
        console.log(error);
      }

    }
    
    dataInit===null?await consultarCuponesRecientes():null;
    
  })

  const onRefreshHandler = () => {
    setrefresh(true)
  }

  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  const listaCuponFlatListConfig = ({
    onRefreshHandler,
    style: { flex: 1 },
    flatListOptions: {
      renderItem: ({ item }) => (
        <CuponNegocio cupon={item}
          onPress={handleOnPress} />),
      keyNameAtrr: "cod_cupon"
    },
  });
  const listaSucursalesFlatListConfig = ({
    style: { flex: 2 },
    flatListOptions: {
      renderItem: (({ item }) => (
        <UltimaSucursal  sucursal={item}
          onPress={handleOnPress} />
      )),
      keyNameAtrr: "cod_sucursal",
      horizontal: true,

    },
  });

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition='left'
      drawerWidth={300}
      ref={drawer}
    >

      <ScrollView style={stylesApp.container}>
        <Text style={stylesApp.textTitle}>MIS SUCURSALES</Text>
        <View style={{ flex: 1 }}>
          <Text style={stylesApp.subTitle}>Ordenar por Ciudad</Text>
          <View style={{ paddingTop: 12 }}>
            <FlatList
              horizontal={true}
              data={CIUDADES_LISTS}
              renderItem={({ item }) => (
                <ItemCiudad ciudad={item} onPress={handleOnPress} />
              )}
            />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={stylesApp.subTitle}
            onPress={() => navigation.navigate('ListaCuponesScreen')}>
            Últimas Sucursales
          </Text>
          <ListaCupones
            refresh={false}
            dataInit={SUCURSALES_LIST}
            settings={listaSucursalesFlatListConfig}
          />

        </View>
        <View>
          
          <Text
            style={stylesApp.subTitle}
            onPress={() => navigation.navigate('ListaCuponesScreen')}>
            Últimos Cupones
          </Text>

          <FlatList
            style={{ flex: 1 }}
            renderItem={({ item }) => (
              <CuponNegocio cupon={item}
                onPress={handleOnPress} />)}
            data={dataInit}
            keyExtractor={item => item.id}
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

{/* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */}