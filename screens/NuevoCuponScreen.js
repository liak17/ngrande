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
import Icon from 'react-native-vector-icons/Feather';
import {stylesApp} from '../const/styles.js';

const NuevoCuponScreen = ({navigation, menu, drawer}) => {
  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => menu}
      drawerPosition="left"
      drawerWidth={300}
      ref={drawer}>
      <ScrollView>
        <View style={stylesApp.container}>
          <Title style={stylesApp.textTitle}>Nuevo Cupón</Title>
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
            label="Precio Normal"
          />
          <TextInput
            mode="outlined"
            style={stylesApp.inputTextMarginTop}
            label="Precio con Descuento"
          />
          <View style={{marginTop:16}}>
          <Button style={stylesApp.btnPrimaryCuadrado} 
          compact={true}
          mode="contained">
            <Text style={stylesApp.textButtons}>Crear Nuevo Cupón</Text>
          </Button>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default NuevoCuponScreen;
