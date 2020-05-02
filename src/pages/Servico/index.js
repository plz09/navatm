import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const detalheServico = require('../../imgs/detalhe_servico.png');

export default function Servico({ navigation }) {
  function navigateToHome() {
    navigation.navigate('ATM Consultoria');
  }
  
    return (
      <View style={styles.geral}>

          <Button title="Go to Home" onPress={navigateToHome}/>

          <View style={styles.imgTxtPrincipal}>
            <Image source={detalheServico} />
            <Text style={styles.title}>Nossos Serviços</Text>
          </View>

          <View style={styles.txtServico}>
            <Text style={styles.txtDetalheServico}> - Consultoria</Text>
            <Text style={styles.txtDetalheServico}> - Processos</Text>
            <Text style={styles.txtDetalheServico}> - Acompanhamento de Projetos</Text>
          </View>
          

      </View>
        
    );
  }

  const styles = StyleSheet.create({
    geral: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      color: '#19D1C8',
      marginLeft: 20,
      marginTop: 30
    },
    imgTxtPrincipal: {
      flexDirection: 'row',
      marginTop: 20
    },
    txtServico: {
      marginTop: 20,
      marginLeft: 20,
      padding: 20,
    },
    txtDetalheServico: {
      fontSize: 25,
      justifyContent: 'space-between'

    }
  });