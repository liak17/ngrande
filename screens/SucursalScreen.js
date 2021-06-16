import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Title, Card, Button, Switch} from 'react-native-paper';

const CuponScreen = ({
  titulo,
  descripcion,
  ciudad,
  direccion,
  telefono,
  navigation,
}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
        <Text style={styles.textoTitulo}>{titulo}</Text>
        <Text style={styles.textoNormal}>{descripcion}</Text>
        <Text style={styles.textoNormal}>Ciudad {ciudad}</Text>
        <Text style={styles.textoNormal}>Direccion: {direccion}</Text>
        <Text style={styles.textoNormal}>Telefono: {telefono}</Text>
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
