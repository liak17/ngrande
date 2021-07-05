import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,DrawerLayoutAndroid} from 'react-native';
import { Card, Title, Avatar, Paragraph, Button } from 'react-native-paper';
import CuponNegocio from '../componentes/CuponNegocio';
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

const ListaCategoriasScreen = ({ navigation, drawer, menu }) => {

    const [cupon, setState] = useState([])

    useEffect(() => {
        //carga los datos al inicio, aqui debemos traelo
    }, [])

    function handleOnPress() {
        navigation.navigate('CuponScreen');

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
                        data={CUPON_LIST}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) => <CuadroDoble texto={item} onPress={handleOnPress} />}
                        keyExtractor={item => item.id}

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