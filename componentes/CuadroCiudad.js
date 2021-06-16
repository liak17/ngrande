import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Card} from 'react-native-paper';
export default function CuadroCiudad ({ciudad}){
    return(
            <View style={styles.contenedor}>
            <Card style={styles.logo}>
                <Card.Cover source={{uri:'https://picsum.photos/700'}}/>
            </Card>
            <Text style={styles.contenedor}>{ciudad}</Text>
            </View>
    );
}

const styles = StyleSheet.create({ 
    logo: {
        width: 66,
        height: 58,
      }
})
