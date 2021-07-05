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
                        Negocios
                    </Title>
                    <Text style={stylesApp.text}>
                        Direccion
                    </Text>
                    <Text style={stylesApp.text}>
                        Descripción
                    </Text>
                    
                    <Button style={stylesApp.btnPrimaryCuadrado} mode="contained" icon='camera'>Contactar</Button>
                </View>

            </ScrollView>
        </DrawerLayoutAndroid>
    )
}
const styles = StyleSheet.create({
   
})

export default NegocioScreen;