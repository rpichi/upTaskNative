import 'react-native-gesture-handler';
import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 const Stack = createStackNavigator();

import  Login  from './Views/Login';
import  CrearCuenta  from './Views/CrearCuenta';


const App = () => {
  return (
    <>
    {/* <Login></Login>
    <CrearCuenta></CrearCuenta> */}
    <NavigationContainer>
     <Stack.Navigator 
      initialRouterName="Login">

       <Stack.Screen
          name="Login"
          component={Login}
          options={{
          title: "Iniciar Sesión",
          headerShown: false
       }}/>

        <Stack.Screen
          name="CrearCuenta"
          component={CrearCuenta}
          options={{
            title: "Crear Cuenta",
            headerStyle:{
              backgroundColor: '#28303B'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
       />

     </Stack.Navigator>
   </NavigationContainer> 
    </>
  );
};


export default App;
