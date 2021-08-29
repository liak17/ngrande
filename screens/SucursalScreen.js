import React from 'react';
import {View, Text, StyleSheet,DrawerLayoutAndroid, ScrollView} from 'react-native';
import {Title, Card, Button, Switch} from 'react-native-paper';

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
      <View style={styles.contenedor}>
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
          style={styles.botonPrimario}
          mode="contained"
          icon="pencil"
          onPress={() => navigation.navigate('NuevaSucursalScreen')}>
          Editar Sucursal
        </Button>
        <Button
          style={styles.botonSecundario}
          mode="contained"
          onPress={() => navigation.navigate('DashboardScreen')}>
          Eliminar
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
