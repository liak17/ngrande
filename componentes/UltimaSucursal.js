import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Card, Title, Avatar, Paragraph, Button } from 'react-native-paper';
export default function UltimaSucursal({ sucursal, handlerOnPress }) {
    return (
        <TouchableHighlight style={{paddingRight: 16}} onPress={() =>handlerOnPress(sucursal)}>
            <View >
                <Card style={styles.imagen}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
                </Card>
                <Text style={styles.texto}>{sucursal.direccion}</Text>
                <Text style={styles.texto}>{sucursal.ciudadeCodCiudad} - {sucursal.pais}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    imagen: {
        height: 200,
        width: 200,
    },
    texto: {
        fontFamily: 'Poppins-Regular'
    }
})