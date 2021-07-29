

import React from 'react'
import  {View, Text,StyleSheet } from 'react-native'
export const ErroresComponent = ({errores}) => {
    const isArray = Array.isArray(errores);

    const component = isArray ? errores.map((e) => (
        <View key={e.cod} style={styles.erroresContenedor}>
            
            <Text style={styles.text}>
                {e.error}
            </Text>
        </View>)) : null;
    

    return (
        <View style={styles.contenedor}>
            {component}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        
        flex: 1,        
        padding: 0
    },
    erroresContenedor: {
        flex: 1,
        backgroundColor: '#FA4141',
        borderWidth:1,
        margin:5,
        alignItems: 'center',        
        justifyContent: 'flex-start',
        borderStyle:'solid',
    },
    text:{
        fontFamily: 'Poppins-Bold',
        padding: 5,
        fontSize:16
    }
})
