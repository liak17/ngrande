import React from 'react';
import {View, Text, StyleSheet,DrawerLayoutAndroid, ScrollView} from 'react-native';
import {Title, Card, Button, Switch} from 'react-native-paper';
import {stylesApp} from '../const/styles.js';
import Icon from 'react-native-vector-icons/Feather';

const CuponScreen = ({
  drawer,menu,
  currentSucursalSelected,
  navigation
}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

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
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
        <Text style={styles.textoTitulo}>{currentSucursalSelected.titulo}</Text>
        <Text style={styles.textoNormal}>{currentSucursalSelected.descripcion}</Text>
        <Text style={styles.textoNormal}>Ciudad {currentSucursalSelected.ciudade.descripcion}</Text>
        <Text style={styles.textoNormal}>Direccion: {currentSucursalSelected.direccion}</Text>
        <Text style={styles.textoNormal}>Telefono: {currentSucursalSelected.telefono}</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

        <Button
        uppercase={false}
          style={stylesApp.btnPrimaryCuadrado}
          mode="contained"
          icon={()=> <Icon name="edit" size={24} color='#FFFFFF'/> }
          onPress={() => alert('proximamente estara disponible')}>
          <Text style={stylesApp.textProducto}>Editar Sucursal</Text>
        </Button>
        <Button
        uppercase={false}
        style={stylesApp.btnSecondaryCuadrado}
          mode="contained"
          onPress={() => alert('proximamente esta sección estara disponible')}>
          <Text style={stylesApp.textProducto}>Eliminar</Text>
        </Button>
      </View>
    </ScrollView>
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({
  botonPrimario: {
    backgroundColor: '#FA4141',
    padding: 18,
    fontSize: 14,
    borderRadius: 10,
    marginTop: 16,
  },
  botonSecundario: {
    backgroundColor: '#7755CC',
    padding: 18,
    fontSize: 14,
    borderRadius: 10,
    marginTop: 16,
  },
  textoTitulo: {
    marginTop: 21,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contenedor: {
    flex: 1,
    marginTop: 26,
    marginLeft: 26,
    marginRight: 26,
    height: '100%',
  },
  textoNormal: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default CuponScreen;
