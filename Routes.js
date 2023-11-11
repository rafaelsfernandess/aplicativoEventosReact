import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/Screen/LoginScreen';
import ListaEventosScreen from './src/Screen/ListaEventosScreen';
import CadastroUsuarioScreen from './src/Screen/CadastroUsuarioScreen';
import CadastroEventoScreen from './src/Screen/CadastroEventoScreen';

export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="lista-eventos" component={ListaEventosScreen} />
        <Stack.Screen name="cadastro-usuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="cadastro-evento" component={CadastroEventoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


