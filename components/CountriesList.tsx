'use client';
import { LatLngType, useGeoLocation } from '~/hooks/useGeoLocation';
import { haversine } from '~/libs/haversine';
import CountryItem from './CountryItem';

type CountryNameType = {
	common: string;
	official: string;
};

type CountryFlagType = {
	svg: string;
	png: string;
	alt: string;
};

export type CountryType = {
	name: CountryNameType;
	flags: CountryFlagType;
	latlng: LatLngType;
};

type CountriesListProps = {
	countries: CountryType[];
};

export default function CountriesList({ countries }: CountriesListProps) {
	const { geoLocation } = useGeoLocation();

	return (
		<>
			{geoLocation === null ? (
				<p>Geolocation is not supported by this browser.</p>
			) : (
				<div>
					<h5>Your current location is:</h5>
					<p>Latitude: {geoLocation[0]}</p>
					<p>Longitude: {geoLocation[1]}</p>
				</div>
			)}

			<br />
			<br />
			<br />
			<ul>
				{countries
					.sort((a, b) => {
						if (geoLocation === null) return 0;
						const distanceA = haversine(geoLocation, a.latlng);
						const distanceB = haversine(geoLocation, b.latlng);

						return distanceA - distanceB;
					})
					.map((country) => (
						<CountryItem
							key={country.name.official}
							country={country}
							userGeoLocation={geoLocation}
						/>
					))}
			</ul>
		</>
	);
}
