import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,DrawerLayoutAndroid} from 'react-native';
import CuadroDoble from '../componentes/CuadroDoble';
import { stylesApp } from '../const/styles';


const ListaCategoriasScreen = ({ navigation, drawer, menu,categoriasData }) => {

    

    

    function handleOnPress() {
        //navigation.navigate();
        alert('Aun no esta disponible esta sección,Estamos trabajando para construir un app Ngrande')
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
                        renderItem={({ item }) => <CuadroDoble categoria={item} onPress={()=>handleOnPress()} />}
                        keyExtractor={item => item.cod_categoria}

                    />
                </View>
            </View>
        </DrawerLayoutAndroid>

    )
}



export default ListaCategoriasScreen;