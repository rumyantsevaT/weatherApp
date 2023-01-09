import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Loading from './Loading';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

export default function WeatherApp() {
	useEffect(() => {
		getLocation();

		// return () => {
		// 	second;
		// };
	}, []);

	const getLocation = async () => {
		try {
			const response = await Location.getForegroundPermissionsAsync();
			console.log(response, 'response');
			const location = await Location.getCurrentPositionAsync();
			console.log(location);
		} catch (error) {
			Alert.alert('Не могу определить местоположение', 'Грусть, печаль :(');
		}
	};
	// componentDidMount() {
	//   this.getLocation();
	// }

	return <Loading />;
}
