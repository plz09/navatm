import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/index';
import Clients from './pages/Clients/index';
import Contact from './pages/Contact/index';
import Empresa from './pages/Empresa/index';
import Servico from './pages/Servico/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ccc'}}}>
        <Stack.Screen name="ATM Consultoria" component={Home} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Empresa" component={Empresa} />
        <Stack.Screen name="Servico" component={Servico} />
      </Stack.Navigator>
  );
}


