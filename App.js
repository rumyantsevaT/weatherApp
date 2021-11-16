import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import { Alert } from 'react-native';
import * as Location from 'expo-location';


export default class extends React.Component {

  getLocation = async () => {
    try {
      const response = await Location.getPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Грусть, печаль :(");
    }


  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return (
      <Loading />
    );
  }
}