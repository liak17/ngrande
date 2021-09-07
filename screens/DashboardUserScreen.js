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
import {CuponScreenName} from '../const/ViewsNames.js'
import CuponNegocio from '../componentes/CuponNegocio';
import ItemCategorias from '../componentes/ItemCategorias';
import TextoVerTodas from '../componentes/TextoVerTodas';
import UltimaSucursal from '../componentes/UltimaSucursal';
import {stylesApp} from '../const/styles.js';
import { GETCUPONES } from '../const/Urls';

const DashboardUserScreen = ({drawer, menu,cupones ,navigation,categoriasData,setCurrentCuponSelected}) => {
  
  function handleOnPressCupon(item) {
    setCurrentCuponSelected(item);
    navigation.navigate(CuponScreenName);
  }

  function handleOnPress() {
    alert('not funtional');
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
              <ItemCategorias categoria={item} />
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
            <CuponNegocio cupon={item}  handlerOnPress={()=>handleOnPressCupon(item)} />
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

 