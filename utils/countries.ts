import countries from "world-countries";

export const formattedContries = countries.map((country) => ({
  code: country.cca2,
  name: country.name.common,
  flag: country.flag,
  location: country.latlng,
  region: country.region,
}));

export const findCountryByCode = (code: string) => {
  return formattedContries.find((country) => country.code === code);
};
