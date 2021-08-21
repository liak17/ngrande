import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {stylesApp} from '../const/styles.js';


export default function TextoVerTodas() {
  return (
    <View
            style={{
              width: '30%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={stylesApp.styleVerTodas} icon="camera">
              Ver Todas
            </Text>

            <Icon
              name="arrow-right"
              color="#FA4141"
              size={20}
              style={{marginTop:13}}
            />
          </View>
  );
}

