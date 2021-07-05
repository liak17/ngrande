import React from 'react';
import { View, Text, StyleSheet, ScrollView,DrawerLayoutAndroid } from 'react-native';
import { Title, Card, TextInput, Button } from 'react-native-paper';
import BotonComponente from '../componentes/BotonComponente';
import { stylesApp } from '../const/styles';
const NegocioScreen = ({ navigation, menu, drawer }) => {
    return (
        <DrawerLayoutAndroid
            renderNavigationView={()=>menu}
            drawerPosition='left'
            drawerWidth={300}
            ref={drawer}
        >
            <ScrollView>
                <View style={stylesApp.container}>
                    <Card>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>
                    <Title style={stylesApp.textTitle}>
                        NEGOCIO
                    </Title>
                    <Text style={stylesApp.text}>
                        Direccion
                    </Text>
                    <Text style={stylesApp.text}>
                        Descripción
                    </Text>
                    <Text style={stylesApp.subTitle}>
                        PVP: 90$
                    </Text>
                    <Text style={stylesApp.subTitle}>
                        GANA:10
                    </Text>
                    
                    <Button style={stylesApp.btnPrimaryCuadrado} mode="contained" icon='camera'>Contactar</Button>
                </View>

            </ScrollView>
        </DrawerLayoutAndroid>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        marginTop: 26,
        marginLeft: 26,
        marginRight: 26,
        height: '100%',
    },
    botonPrimario: {
        backgroundColor: '#FA4141',
        padding: 18,
        fontSize: 14,
        borderRadius: 10,
        marginTop: 26,
    },
    textoInputs: {
        fontSize: 18,
        marginTop: 16,
    },
})

export default NegocioScreen;