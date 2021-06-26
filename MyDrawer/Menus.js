import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { menuNegocio } from '../const/MenuOpciones.js';
import { Menu, Divider, Title } from 'react-native-paper';



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
    <View key={id}>
    <Menu.Item onPress={() => navigation.navigate(screen)} title={title} icon='camera' />
    </View>
    )
  const menu = opcionesNegocio.map(renderMenu);
  return (
    <View style={styles.contenedor}>  
    <Title style={styles.txtMenu}>DEALERS PLUS</Title>
    <Text style={styles.txtMenu}>ADMINISTRA TU NEGOCIO</Text>
    <Divider style={{marginTop:16}}/>
      {menu}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:16,
  
    
  },
  txtMenu: {
    paddingStart:16,
  }
});