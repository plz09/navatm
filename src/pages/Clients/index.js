import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const detalheClientes = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

export default function Clients({ navigation }) {
function navigateToHome() {
  navigation.navigate('ATM Consultoria');
}

  return (
    <View style={styles.geral}>
        <Button title="Go to Home" onPress={navigateToHome}/>
        <View style={styles.logoClientes}>
          <Image source={detalheClientes} />
          <Text style={styles.txtClientes}>Nossos Clientes</Text>
        </View>


        <View style={styles.clientes}>
          <Image source={cliente1} />
          <Text style={styles.txtdetalheCliente}>Lorem ipsum dolor</Text>
        </View>

        <View style={styles.clientes}>
          <Image source={cliente2} />
          <Text style={styles.txtdetalheCliente}>Lorem ipsum dolor</Text>
        </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  txtClientes: {
    color: '#b9c941',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 8
  },
  logoClientes: {
    flexDirection: 'row',
    marginTop: 5
  },
  clientes: {
    margin: 20,
    padding: 20
  },
  txtdetalheCliente: {
    fontSize: 18,
    marginLeft: 15
  },
  geral: {
    flex: 1,
    backgroundColor: '#fff'
  }
});