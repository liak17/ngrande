import React from 'react';
import { View, Text, StyleSheet, ScrollView ,DrawerLayoutAndroid} from 'react-native';
import { Title, Card, Button, Switch } from 'react-native-paper';
import BotonComponente from '../componentes/BotonComponente';

const CuponScreen = ({
  menu,drawer,titulo,
  descripcion,
  precioNormal,
  gana,
  estado,
  navigation
}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
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
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
          <Text style={styles.textoTitulo}>{titulo|"helo"}</Text>
          <Text style={styles.textoNormal}>{descripcion|"descripcion"}</Text>
          <Text style={styles.textoNormal}>Precio Normal: {precioNormal|'100'}</Text>
          <Text style={styles.textoNormal}>GANA: {gana|'25'}$</Text>
          <Text style={styles.textoNormal}>Estado: {estado}</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

          <Button
            style={styles.botonPrimario}
            mode="contained"
            icon="pencil"
            onPress={() => navigation.navigate('NuevoCuponScreen')}>
            Crear Nuevo Cupón
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
