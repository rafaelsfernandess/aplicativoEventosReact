import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/Screen/LoginScreen';
import ListaEventosScreen from './src/Screen/ListaEventosScreen';
import CadastroUsuarioScreen from './src/Screen/CadastroUsuarioScreen';
import CadastroEventoScreen from './src/Screen/CadastroEventoScreen';
import EventoScreen from './src/Screen/EventoScreen';
import EditarCadastroEventoScreen from './src/Screen/EditarCadastroEvento';

export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="lista-eventos" component={ListaEventosScreen} />
        <Stack.Screen name="cadastro-usuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="cadastro-evento" component={CadastroEventoScreen} />
        <Stack.Screen name="editar-evento" component={ EditarCadastroEventoScreen } />
        <Stack.Screen name="evento" component={EventoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


