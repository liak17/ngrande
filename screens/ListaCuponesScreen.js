import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,DrawerLayoutAndroid} from 'react-native';
import CuponNegocio from '../componentes/CuponNegocio';
import { stylesApp } from '../const/styles';
const CUPON_LIST = [
    {
      id: 1,
      titulo: 'Zapatos marca nike',
      precio: 23,
      imagen: 'https://picsum.photos/650',
      precio_descuento: 10,
    },
    {
      id: 2,
      titulo: 'Tacones rojos de chanel',
      precio: 23,
      imagen: 'https://picsum.photos/500',
      precio_descuento: 10,
    },
    {
      id: 3,
      titulo: 'Deportivos adidaas',
      precio: 23,
      imagen: 'https://picsum.photos/600',
      precio_descuento: 10,
    },
    {
      id: 4,
      titulo: 'Crocs amarillas',
      precio: 23,
      imagen: 'https://picsum.photos/700',
      precio_descuento: 10,
    },
  ];

const ListaCuponesScreen = ({ navigation, drawer, menu }) => {

    const [cupon, setState] = useState([])

    useEffect(() => {
        //carga los datos al inicio, aqui debemos traelo
    }, [])

    function handleOnPress() {
        navigation.navigate('CuponScreen');

    }

    return (
        <DrawerLayoutAndroid
            renderNavigationView={()=>menu}
            drawerPosition='left'
            drawerWidth={300}
            ref={drawer}
        >

            <View style={stylesApp.container}>


                <View style={{ flex: 3 }}>
                    <Text style={stylesApp.subTitle}>Últimos Cupones</Text>
                    <FlatList
                        data={CUPON_LIST}
                        renderItem={({ item }) => <CuponNegocio cupon={item} onPress={handleOnPress} />}
                        keyExtractor={item => item.id}

                    />
                </View>
            </View>
        </DrawerLayoutAndroid>

    )
}


export default ListaCuponesScreen;