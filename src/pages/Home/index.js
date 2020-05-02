import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuServico = require('../../imgs/menu_servico.png');

export default function Home({ navigation }) {
function navigateToClients() {
  navigation.navigate();
}

  return (
    <View style={styles.geral}>

      <View style={styles.logo}>
        <Image source={logo} />
      </View>

      <View style={styles.menu}>

        <View style={styles.menuGrupo}>

          <TouchableHighlight 
            underlayColor={'#b9c941'}
            onPress={() => navigation.push('Clients')}>
            <Image style={styles.imgMenu} source={menuCliente} />
          </TouchableHighlight>


          <TouchableHighlight 
            underlayColor={'#EC7148'}
            onPress={() => navigation.push('Empresa')}>
            <Image  style={styles.imgMenu} source={menuEmpresa} />
          </TouchableHighlight>
        </View>

        <View style={styles.menuGrupo}>

          <TouchableHighlight 
            underlayColor={'#61BDBC'}
            onPress={() => navigation.push('Contact')}>
            <Image style={styles.imgMenu} source={menuContato} />
          </TouchableHighlight>

          <TouchableHighlight 
            underlayColor={'#19D1C8'}
            onPress={() => navigation.push('Servico')}>
            <Image style={styles.imgMenu} source={menuServico} />
          </TouchableHighlight>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  },
  geral: {
    flex: 1,
    backgroundColor: '#fff'
  }
});