import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import transacciones from '../transacciones.json'



export default function Ayuda() {
  return (
    <View style={styles.container}>
      <FlatList
        data={transacciones}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titular}>{item.titular}</Text>
            <Text style={styles.monto}>Monto: ${item.monto}</Text>
            <Text style={styles.fecha}>Fecha: {item.fecha}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({})