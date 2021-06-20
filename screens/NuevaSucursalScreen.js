import React from 'react';
import { View, Text, StyleSheet, ScrollView,DrawerLayoutAndroid } from 'react-native';
import { Title, Card, TextInput, Button } from 'react-native-paper';

const NuevaSucursalScreen = ({ navigation, menu, drawer }) => {
    return (
        <DrawerLayoutAndroid
            renderNavigationView={()=>menu}
            drawerPosition='left'
            drawerWidth={300}
            ref={drawer}
        >
            <ScrollView>
                <View style={styles.contenedor}>
                    <Title>Nuevo Sucursal</Title>
                    <Card>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>
                    <TextInput
                        style={styles.textoInputs}
                        label="Título" />
                    <TextInput
                        style={styles.textoInputs}
                        label="Descripción" />
                    <TextInput
                        style={styles.textoInputs}
                        label="Direccion" />
                    <TextInput
                        style={styles.textoInputs}
                        label="Telefono" />
                    <TextInput
                        style={styles.textoInputs}
                        label="Categoria" />
                    <Button style={styles.botonPrimario} mode="contained">Crear Nueva Sucursal</Button>
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

export default NuevaSucursalScreen;