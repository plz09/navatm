import React from 'react';
import { Text, View, Button, StyleSheet, Image, StatusBar } from 'react-native';

const detalheEmpresa = require('../../imgs/detalhe_empresa.png');

export default function Empresa({ navigation }) {
  function navigateToHome() {
    navigation.navigate('ATM Consultoria');
  }
  
    return (
      <View style={styles.geral}>

          <StatusBar style={{ headerStyle: { backgroundColor: '#EC7148' }}}/>

          <Button title="Go to Home" onPress={navigateToHome}/>

          <View style={styles.imgTxtPrincipal}>
            <Image source={detalheEmpresa} />
            <Text style={styles.title}>A Empresa</Text>
          </View>

              <Text style={styles.txtEmpresa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
              </Text>
          

      </View>
        
    );
  }

  const styles = StyleSheet.create({
    geral: {
      flex: 1,
      backgroundColor: '#fff'
    },
    txtEmpresa: {
      fontSize: 18,
      marginTop: 25,
      margin: 20,
      padding: 15
    },
    title: {
      fontSize: 30,
      color: '#EC7148',
      marginLeft: 20,
      marginTop: 30
    },
    imgTxtPrincipal: {
      flexDirection: 'row'
    }
  });