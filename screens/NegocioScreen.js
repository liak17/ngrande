import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import {Title, Card, TextInput, Button} from 'react-native-paper';
import BotonComponente from '../componentes/BotonComponente';
import {stylesApp} from '../const/styles';
import Icon from 'react-native-vector-icons/Feather';

const NegocioScreen = ({navigation, menu, drawer}) => {
  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView>
        <View style={stylesApp.container}>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Title style={stylesApp.textTitleProducto}>Zapatos marca nike</Title>
          <Text style={stylesApp.textProducto}>
            <Icon name="map-pin" color="#FA4141" size={18} /> Av. Colón y América S3-17
          </Text>
          <Text style={stylesApp.textProducto}>Zapatos negros deportivos de nike, tallas 37,38,39,40,41 para hombre y mujer.</Text>
          <Text style={stylesApp.textProducto}>PVP: 23$</Text>
          <Text style={stylesApp.textProducto}>GANA: 10$</Text>

          <Button style={stylesApp.btnPrimaryCuadrado} mode="contained">
            <Icon name="edit"
            size={18} />
            <Text style={stylesApp.textButtons}> Contactar</Text>
          </Button>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({});

export default NegocioScreen;
