import Image from 'next/image';
import { LatLngType } from '~/hooks/useGeoLocation';
import { haversine } from '~/libs/haversine';
import { CountryType } from './CountriesList';

type CountryItemProps = {
	country: CountryType;
	userGeoLocation: LatLngType | null;
};

export default function CountryItem({
	country,
	userGeoLocation,
}: CountryItemProps) {
	const { latlng, flags, name } = country;

	const distance = userGeoLocation ? haversine(userGeoLocation, latlng) : 0;

	return (
		<li>
			<Image
				src={flags.svg}
				width={24}
				height={24}
				alt={flags.alt}
				className='inline-block'
			/>{' '}
			{name.official} - {distance}
		</li>
	);
}
