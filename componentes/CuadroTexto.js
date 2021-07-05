import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {Card, Avatar, Title, Paragraph} from 'react-native-paper';
import { stylesApp } from '../const/styles';
export default function CuadroTexto ({texto}){
    return(
            <View style={styles.card}>
            
            <Card >
                    <Card.Content>
                        <Text style={styles.textoCuadro}>{texto}</Text>
                    </Card.Content>
                
                </Card>
            </View>
    );
}

const styles = StyleSheet.create({ 
    card: {
        alignItems: 'baseline',        
        justifyContent: 'center',
 
        },
    textoCuadro:{
        fontFamily: 'Poppins-Regular',
            marginTop:16,
            color: "#000000"
    }
})
