import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Inicio() {
  return (
    <View
    backgroundColor = 'white'>
      <Image
      style = {styles.logo}
      source = {{uri: "https://brandemia.org/sites/default/files/inline/images/logo_banco_pichincha_portada.jpg"}}></Image>
    <Text
    style = {styles.ul}>
        Último ingreso 14 febrero.2024 /  12h10</Text>
    <Text
    style = {styles.texto}>
        Mis productos</Text>
    <TouchableOpacity
    style = {styles.tou}>
        <Text
        style = {styles.texp}>
        PRINCIPAL </Text>
        <Text
        style = {styles.texpp}>Nro. 22003xxx </Text>
            <TouchableOpacity
            style = {styles.tou2}>
            <Text
            style= {styles.texpp}>Ver todas mi cuentas</Text>
            </TouchableOpacity>
    </TouchableOpacity>
    <Text
    style = {styles.texto}>
       Operaciones</Text>
    <TouchableOpacity>
        <FontAwesome6 name="money-bill-transfer" size={24} color="black" />
        <Text> Transferir dinero </Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <AntDesign name="bulb" size={24} color="black" />
        <Text> Pagar Servicios</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <FontAwesome name="credit-card-alt" size={24} color="black" />
        <Text>Pagar Tarjetas</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <FontAwesome6 name="border-all" size={24} color="black" />
        <Text>Todas las operaciones</Text>
    </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width: 300,
        height: 150
    },
    texto:{
        fontSize:30,
        color: '#666',
        margin: 20
    },
    ul:{
     marginHorizontal: 20
    },
    tou:{
        margin: 20, 
    },
    tou2:{
        backgroundColor: '#ffe341ff',
        margin: 1,
        textAlign: 'center',
        alignContent: 'center',
        borderRadius:10,
        gap: 60,
        alignSelf: 'center',
        width: 380,
        height: 40,
        alignItems: 'center'
    },
    texp: {
        color: '#03043aff',
        fontSize: 35,
        
    },
    texpp: {
        color: '#03043aff',
        fontSize: 25,
        
    }


})