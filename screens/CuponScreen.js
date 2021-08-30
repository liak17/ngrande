import React,{ useEffect,useState } from 'react';
import { View, Text, StyleSheet, ScrollView ,DrawerLayoutAndroid} from 'react-native';
import { Title, Card, Button, Switch } from 'react-native-paper';
import {stylesApp} from '../const/styles.js';
import Icon from 'react-native-vector-icons/Feather';
import BotonComponente from '../componentes/BotonComponente';

const CuponScreen = ({
  menu,drawer,currentCuponSelected,
  navigation
}) => {
  const {cod_cupon,titulo,descripcion,precio,precio_descuento,estado}=currentCuponSelected ;  
  
  const [isSwitchOn, setIsSwitchOn] = useState(estado)
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <DrawerLayoutAndroid
      renderNavigationView={()=>menu}
      drawerPosition='left'
      drawerWidth={300}
      ref={drawer}
    >
      <ScrollView>
        <View style={stylesApp.container}>
          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
          <Text style={stylesApp.subTitle}>{titulo}</Text>
          <Text style={stylesApp.textDescriptionProducto}>{descripcion}</Text>
          <Text style={stylesApp.textProducto}>Precio Normal: {precio}</Text>
          <Text style={stylesApp.textoGana}>GANA: {precio_descuento}$</Text>
          <Text style={stylesApp.textProducto}>Estado: {estado}</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

          <Button
          uppercase={false}
            style={stylesApp.btnPrimaryCuadrado}
            mode="contained"
            icon={()=> <Icon name="edit" size={24} color='#FFFFFF'/> }
            onPress={() => navigation.navigate('NuevoCuponScreen')}>
            <Text style={stylesApp.textProducto}>Editar Cupón</Text>
          </Button>
          <View style={{marginTop:16}}>
          <Button
          uppercase={false}
            style={stylesApp.btnSecondaryCuadrado}
            mode="contained"
            onPress={() => navigation.navigate('DashboardScreen')}>
            <Text style={stylesApp.textProducto}>Eliminar</Text>
          </Button>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};


export default CuponScreen;
