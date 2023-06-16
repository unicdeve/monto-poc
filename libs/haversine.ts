import { LatLngType } from '~/hooks/useGeoLocation';

function toRad(v: number) {
	return (v * Math.PI) / 180;
}

export function haversine(l1: LatLngType, l2: LatLngType) {
	var R = 6371; // km
	var x1 = l2[0] - l1[0];
	var dLat = toRad(x1);
	var x2 = l2[1] - l1[1];
	var dLon = toRad(x2);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(l1[0])) *
			Math.cos(toRad(l2[0])) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;

	return d;
}
