import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  DrawerLayoutAndroid,
} from 'react-native';
import {Avatar, Card, Button, Paragraph, Title} from 'react-native-paper';
import CuadroDoble from '../componentes/CuadroDoble.js';
import CartaNombre from '../componentes/CartaNombre';
import CuadroTexto from '../componentes/CuadroTexto';
import {stylesApp} from '../const/styles.js';

const OficinaUserScreen = ({drawer, menu, navigation}) => {
  const [cupon, setState] = useState([]);
  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView style={stylesApp.container}>
        <Text style={stylesApp.textTitle}>MI OFICINA</Text>
        <View style={{flex: 1}}>
          <View style={{paddingTop: 16}}>
            <CartaNombre cedula="182789217927" nombre="Nombre en la red" />
          </View>
        </View>
        <View style={{flex: 2, paddingTop: 22, justifyContent: 'center'}}>
          <Text style={stylesApp.subTitle}>Ganancias Directas</Text>
          <Text>
            <CuadroTexto texto="2800$" />
          </Text>

          <Text style={stylesApp.subTitle}>Ganancias por Red</Text>
          <Text>
            <CuadroTexto texto="789$" />
          </Text>
          <Text style={stylesApp.subTitle}>Ganancias de la App</Text>
          <Text>
            <CuadroTexto texto="5567$" />
          </Text>
          <Text style={stylesApp.textTitle}>NOTICIAS</Text>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginLeft: 16,
    justifyContent: 'center',
  },
});

export default OficinaUserScreen;
