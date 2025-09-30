import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from '@expo/vector-icons/Feather';

//screens
import Inicio from './screens/Inicio'
import Miperfil from './screens/Miperfil'
import Misproductos from "./screens/Misproductos"
import Ayuda from "./screens/Ayuda";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name= "Inicio"
            component={Inicio}
            options={{
                headerShown: false,
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size}) => (
                <FontAwesome name="home" size={24} color="black" />
            ),
            }}/>
            <Tab.Screen
            name = "Mis Productos"
            component={Misproductos}
            options={{
                tabBarLabel: 'Mis Productos',
                tabBarIcon: ({color,size}) => (
                    <AntDesign name="wallet" size={24} color="black" />
                )
            }}/>

            <Tab.Screen
            name = "Ayuda"
            component={Ayuda}
            options={{
                tabBarLabel: 'Ayuda',
                tabBarIcon: ({color,size}) => (
                    <Feather name="help-circle" size={24} color="black" />
                )
            }}/>
            <Tab.Screen
            name = "Mi Perfil"
            component={Miperfil}
            options={{
                tabBarLabel: 'Mi Perfil',
                tabBarIcon: ({color,size}) => (
                    <FontAwesome name="user" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}