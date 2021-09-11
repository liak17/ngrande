import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, DrawerLayoutAndroid } from 'react-native';
import CuponNegocio from '../componentes/CuponNegocio';
import { stylesApp } from '../const/styles';
import * as ViewsNames from '../const/ViewsNames.js';


const ListaCuponesScreen = ({ navigation, drawer, menu, cuponesData,setCurrentCuponSelected }) => {


  function handleOnPressCupon(item) {
    setCurrentCuponSelected(item);
    navigation.navigate(ViewsNames.CuponScreenName);
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition='left'
      drawerWidth={300}
      ref={drawer}
    >

      <View style={stylesApp.container}>


        <View style={{ flex: 3 }}>
          <Text style={stylesApp.subTitle}>Últimos Cupones</Text>
          <FlatList
            data={cuponesData}            
            renderItem={({ item }) => <CuponNegocio cupon={item} handlerOnPress={()=>handleOnPressCupon(item)} />}
            keyExtractor={item => item.cod_cupon}
          />
        </View>
      </View>
    </DrawerLayoutAndroid>

  )
}


export default ListaCuponesScreen;