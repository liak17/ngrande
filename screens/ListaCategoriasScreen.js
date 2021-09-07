import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,DrawerLayoutAndroid} from 'react-native';
import CuadroDoble from '../componentes/CuadroDoble';
import { stylesApp } from '../const/styles';

const CUPON_LIST = [
    {
        id:1,
    texto:'Tecnologia',
        cantidadSucursales:12,
      },
      {
        id:2,
        texto:'Ropa',
        cantidadSucursales:12,
      },
      {
        id:3,
        texto:'Zapatos',
        cantidadSucursales:12,
      },
      {
        id:4,
        texto:'Camisas',
        cantidadSucursales:12,
      },
];

const ListaCategoriasScreen = ({ navigation, drawer, menu,categoriasData }) => {

    

    

    function handleOnPress() {
        //navigation.navigate();

    }

    return (
        <DrawerLayoutAndroid
            renderNavigationView={()=>menu}
            drawerPosition='left'
            drawerWidth={300}
            ref={drawer}
        >

            <View style={stylesApp.container}>

                <View style={{ flex: 1 }}>
                    <Text style={stylesApp.textTitle}>CATEGORIAS</Text>
                    <FlatList
                        columnWrapperStyle={{display: 'flex',justifyContent: 'center'}}
                        data={categoriasData}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) => <CuadroDoble categoria={item} onPress={handleOnPress} />}
                        keyExtractor={item => item.cod_categoria}

                    />
                </View>
            </View>
        </DrawerLayoutAndroid>

    )
}

const styles = StyleSheet.create({
    subtitulo: {
        fontSize: 18,
        marginTop: 8,
        fontWeight: 'bold'
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    tituloSucursales: {
        fontSize: 14
    },
    subtituloSucursales: {
        fontSize: 13
    },
    contenedor: {
        flex: 1,
        marginTop: 26,
        marginLeft: 26,
        marginRight: 26,
        height: '100%',
        marginBottom: 16,
    }
})

export default ListaCategoriasScreen;