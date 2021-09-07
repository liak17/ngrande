import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { menuNegocio, menuUsuario } from '../const/MenuOpciones.js';
import { Menu, Divider, Title } from 'react-native-paper';
import { InicioScreenName } from '../const/ViewsNames.js';


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

export const MenuNegocio = ({ navigation, nombre_completo, setlogin }) => {
  const opcionesNegocio = menuNegocio;
  const renderMenu = ({ title, screen, id, icon }) => (
    <View key={id}>
      <Menu.Item onPress={() => {
        if (screen === InicioScreenName) {
          return setlogin(false);
        } else {
          return navigation.navigate(screen);
        }

      }} title={title} icon={icon} />
    </View>
  )
  const menu = opcionesNegocio.map(renderMenu);
  return (
    <View style={styles.contenedor}>
      <Title style={styles.txtMenu}>{nombre_completo}</Title>
      <Text style={styles.txtMenu}>ADMINISTRA TU NEGOCIO</Text>
      <Divider style={{ marginTop: 16 }} />
      {menu}
    </View>
  );
}


export const MenuUsuario = ({ navigation, nombre_completo ,setlogin}) => {
  const opcionesUsuario = menuUsuario;
  const renderMenu = ({ title, screen, id, icon }) => (
    <View key={id}>
      <Menu.Item onPress={() => {
        if (screen === InicioScreenName) {
          return setlogin(false);
        } else {
          return navigation.navigate(screen);
        }

      }} title={title} icon={icon} />
    </View>
  )
  const menu = opcionesUsuario.map(renderMenu);
  return (
    <View style={styles.contenedor}>
      <Title style={styles.txtMenu}>{nombre_completo}</Title>
      <Text style={styles.txtMenu}>ADMINISTRA TU PERFIL</Text>
      <Divider style={{ marginTop: 16 }} />
      {menu}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,


  },
  txtMenu: {
    paddingStart: 16,
  }
});