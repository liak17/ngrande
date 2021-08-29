import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import {Title, Card, TextInput, Button} from 'react-native-paper';
import {stylesApp} from '../const/styles.js';

const NuevaSucursalScreen = ({navigation, menu, drawer}) => {
  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView>
        <View style={stylesApp.container}>
          <Title style={stylesApp.textTitle}>Nueva Sucursal</Title>
          <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Título"
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Descripción"
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Direccion"
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Telefono"
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Categoria"
          />
          <View style={{marginTop:16}}>
          <Button style={stylesApp.btnPrimaryCuadrado} mode="contained">
          <Text style={stylesApp.textButtons}>Crear Sucursal</Text>
          </Button>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default NuevaSucursalScreen;
