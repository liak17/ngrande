import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { menuNegocio } from '../const/MenuOpciones.js';



export const MenuSimple = () => (
  <View >
    <Text ></Text>
    <TouchableHighlight
      title="Inicio"
    />
    <TouchableHighlight
      title="Salir"

    />


  </View>
);
export const MenuNegocio = ({ navigation }) => {
  const opcionesNegocio = menuNegocio;
  const renderMenu = ({ title, screen, id }) => (
    <TouchableHighlight
      key={id}
      style={styles.button}
      onPress={() => navigation.navigate(screen)}>
      <Text style={styles.paragraph}>{title}</Text>
    </TouchableHighlight>)
  const menu = opcionesNegocio.map(renderMenu);
  return (
    <View style={styles.contenedor}>      
      {menu}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:16,
    paddingHorizontal:16,
    
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  button:{
    borderRadius: 10,
    borderWidth:1,
    marginVertical:2,
    backgroundColor:'#1ef',
    borderColor:'#e1e1e1'
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});