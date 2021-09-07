import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,  
  DrawerLayoutAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CuponNegocio from '../componentes/CuponNegocio';
import ItemCategorias from '../componentes/ItemCategorias';
import TextoVerTodas from '../componentes/TextoVerTodas';
import UltimaSucursal from '../componentes/UltimaSucursal';
import {stylesApp} from '../const/styles.js';
import { GETCUPONES } from '../const/Urls';

const DashboardUserScreen = ({drawer, menu, navigation,categoriasData}) => {
  const [cupon, setState] = useState([]);
  const [cupones,setCupones]= useState(null);
  /*consulta de promociones */

  useEffect(() => {
    
    const consultaPromociones=async()=>{
      
      try {
        const url =GETCUPONES;
        const whereClause = {
          whereClause:[  {
            "attr": "estado",
            "value": 1
        }]
        };
        const cupones=await axios.post(url,whereClause);        
        setCupones(prev=>{
          const currentCupones= Object.assign(cupones.data, prev);
          return currentCupones;
        });       

      } catch (error) {
        alert('algo salio mal,intentalo más tarde');
      }
    
    }
    if (!cupones) {
      consultaPromociones();
      
    }
  }, [])


  function handleOnPress() {
    alert('not funtional')
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
            keyExtractor={item => item.cod_categoria}
            data={categoriasData}
            renderItem={({item}) => (
              <ItemCategorias categoria={item} onPress={handleOnPress} />
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
          data={cupones}
          renderItem={({item}) => (
            <CuponNegocio cupon={item} onPress={handleOnPress} />
          )}
          keyExtractor={item => item.cod_cupon}
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
