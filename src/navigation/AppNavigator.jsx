import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import NovaIdeiaScreen from '../screens/NovaIdeiaScreen';
import DetalhesIdeiaScreen from '../screens/DetalhesIdeiaScreen';
import EditarIdeiaScreen from '../screens/EditarIdeiaScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="NovaIdeia"
          component={NovaIdeiaScreen}
        />

        <Stack.Screen
          name="DetalhesIdeia"
          component={DetalhesIdeiaScreen}
        />

        <Stack.Screen
          name="EditarIdeia"
          component={EditarIdeiaScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}