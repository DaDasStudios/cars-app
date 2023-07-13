import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
    "X-RapidAPI-Host": process.env.RAPID_API_HOST || "",
  };

  url.searchParams.append("make", manufacturer);
  url.searchParams.append("model", model);
  url.searchParams.append("year", year.toString());
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("fuel_type", fuel);

  const response = await fetch(url, {
    headers: headers,
    cache: "no-store",
  });

  const result = await response.json();
  return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export function generateCarImageURL(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}

export function updateSearchParams(type: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  if (type) {
    searchParams.set(type, value);
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}
