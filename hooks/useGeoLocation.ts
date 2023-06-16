import { useEffect, useState } from 'react';

export type LatLngType = [number, number];

export const useGeoLocation = () => {
	const [geoLocation, setGeoLocation] = useState<LatLngType | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setGeoLocation([position.coords.latitude, position.coords.longitude]);
			});
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	}, []);

	return { geoLocation };
};
