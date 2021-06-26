import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Card, Title, Avatar, Paragraph, Button} from 'react-native-paper';
export default function UltimaSucursal ({sucursal,onPress}){
    return(

        <View style={{marginTop:16, paddingRight:16}}>
            <Card style={styles.imagen} onPress={onPress}>
                <Card.Cover source={{uri:'https://picsum.photos/200'}} />
            </Card>
        <Text style={styles.texto}>{sucursal.nombreSucursal}</Text>
        <Text style={styles.texto}>{sucursal.ciudad} - {sucursal.pais}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    imagen:{
        height:200,
        width:200,
    },
    texto: {
        fontFamily: 'Poppins-Regular'
    }
})