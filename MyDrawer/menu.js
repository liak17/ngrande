import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    }
  });

 export const MenuSimple = () => (
    <View >
      <Text ></Text>
      <Button
        title="Inicio"  
       
      />
      <Button
        title="Nuevo Cupon"  
        
      />
      <Button
        title="Nueva Sucursal"  
           
      />

    </View>
  );
  export const MenuNegocio = () => (
    <View >
      <Text style={styles.paragraph}>I'm in negocisdadso!</Text>
      <Button
        title="Close drdddddawer"        
      />
    </View>
  );


  