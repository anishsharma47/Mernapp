import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from 'react-redux/es/exports';

import AuthStack from './AuthStack';
import MainStack from './MainStack';






const Stack = createNativeStackNavigator();

export default function Routes() {

   

 
  
    return (
        <NavigationContainer>
            <Stack.Navigator>

                {true ? MainStack(Stack) : AuthStack(Stack)}
              

            {/* {MainStack(Stack)}
            {AuthStack(Stack)} */}

         
   
            </Stack.Navigator>

        </NavigationContainer>
    );
}