import CountriesList from '~/components/CountriesList';

const API_URL = 'https://restcountries.com/v3.1';

async function getCountries() {
	const res = await fetch(`${API_URL}/all?fields=name,flags,latlng`);
	const countries = await res.json();
	return countries;
}

export default async function Home() {
	const countries = await getCountries();

	return <CountriesList countries={countries} />;
}
