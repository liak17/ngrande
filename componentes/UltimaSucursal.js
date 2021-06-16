import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Card, Title, Avatar, Paragraph, Button} from 'react-native-paper';
export default function UltimaSucursal ({nombreSucursal,ciudadSucursal}){
    return(
        
        <View style={{marginTop:16}}>
            <Card style={styles.imagen}>
                <Card.Cover source={{uri:'https://picsum.photos/200'}} />
            </Card>
        <Text>{nombreSucursal}</Text>
        <Text>{ciudadSucursal}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    imagen:{
        height:200,
        width:200,
    }
})