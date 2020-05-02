import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const detalheContato = require('../../imgs/detalhe_contato.png');

export default function Contact({ navigation }) {
  function navigateToHome() {
    navigation.navigate('ATM Consultoria');
  }
  
    return (
      <View style={styles.geral}>

          <Button title="Go to Home" onPress={navigateToHome}/>

          <View style={styles.imgTxtPrincipal}>
            <Image source={detalheContato} />
            <Text style={styles.title}>Contato</Text>
          </View>

          <View style={styles.txtContato}>
            <Text style={styles.txtdetalhes}>FAX: (351) 1234-1234</Text>
            <Text style={styles.txtdetalhes}>Tel: (351) 567891-967</Text>
            <Text style={styles.txtdetalhes}>Email: contact@atmconsultoria.com</Text>
          </View>
            
  
      </View>
        
    );
  }

  const styles = StyleSheet.create({
    geral: {
      flex: 1,
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 30,
      color:'#61BDBC',
      marginLeft: 15,
      marginTop: 43
      
    },
    imgTxtPrincipal: {
      flexDirection: 'row'
    },
    txtContato: {
      marginTop: 20,
      marginLeft: 10
    },
    txtdetalhes: {
      fontSize: 16
    }
  });