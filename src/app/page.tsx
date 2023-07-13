"use client";

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const dataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log("render");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const cars = await fetchCars({
        manufacturer,
        model,
        year,
        fuel,
        limit,
      });
      setAllCars(cars);
      setLoading(false);
    })();
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Expolore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section className="">
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allCars.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
