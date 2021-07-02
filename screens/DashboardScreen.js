import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
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

const SUCURSALES_LIST = [
  {
    id: 1,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 2,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 3,
    nombreSucursal: 'Calzado de Pedro',
    ciudad: 'Quito',
    pais: 'Ecuador'
  },
  {
    id: 4,
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



const DashboardScreen = ({ drawer, menu, navigation,user }) => {
  const [dataInit, setData] = useState(null);
  const [refresh, setrefresh] = useState(false)
  const [cupon, setState] = useState([]);
  console.log(user);
  useEffect(async () => {
    const consultarApi = async (limitOp) => {
      
      const limit = limitOp | 8;
      const url = 'https://infinite-crag-10539.herokuapp.com/get/cupon'
      try {
        const resultado = await
          axios.post(url,
            {
              whereClause: [
                {
                  attr: "negocioCodNegocio",
                  value: 5
                }], limit
            });

        if (!dataInit) {
          setData(resultado.data);
          setrefresh(false)
        } else {
          const { data } = resultado;
          const dataPrev = dataInit.slice();
          const dataCurrent = () => {
            return data.map((resCupon) => {
              return dataPrev.some((cupon) => cupon.cod_cupon === resCupon.cod_cupon) ? null :
                resCupon;
            });
          }


          const datacurrent = [...dataPrev, ...dataCurrent]
          console.log(datacurrent);
          setData(datacurrent);
          setrefresh(false)

        }

      } catch (error) {
        console.log(error);

      }
      return () => {
        setrefresh(false)
      }

    }
     await consultarApi();
  }, [refresh])

  const onRefreshHandler = () => {
    setrefresh(true)
  }

  function handleOnPress() {
    navigation.navigate('CuponScreen');
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
          <FlatList
            horizontal={true}
            data={SUCURSALES_LIST}
            renderItem={({ item }) => (
              <UltimaSucursal sucursal={item} onPress={handleOnPress} />
            )

            } />
        </View>

        <View style={{ flex: 3 }}>
          <Text
            style={stylesApp.subTitle}
            onPress={() => navigation.navigate('ListaCuponesScreen')}>
            Últimos Cupones
          </Text>
          <FlatList
            data={dataInit}
            onRefresh={onRefreshHandler}
            ListEmptyComponent={<Text>NADA Aùn</Text>}
            refreshing={refresh}
            renderItem={({ item }) => (
              <CuponNegocio key={item.cod_cupon} cupon={item}
                onPress={handleOnPress} />
            )}
            keyExtractor={(item) => item.cod_cupon}
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