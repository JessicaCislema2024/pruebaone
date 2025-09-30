import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigators from './Navigators';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigators';


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
}