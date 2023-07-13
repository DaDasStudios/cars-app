"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import { SearchManufacturer } from ".";
import { SearchBarProps } from "@/types";

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}


export default function SearchBar({ setManufacturer , setModel }: SearchBarProps ) {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  // const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchManufacturer && !searchModel) {
      return alert("Please fill in the search bar");
    }

    setManufacturer(searchManufacturer)
    setModel(searchModel)

    //updateSearchParams();
  }

  // const updateSearchParams = () => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (searchModel) {
  //     searchParams.set("model", searchModel.toLowerCase());
  //   } else {
  //     searchParams.delete("model");
  //   }

  //   if (searchManufacturer) {
  //     searchParams.set("manufacturer", searchManufacturer.toLowerCase());
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }

  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;
  //   router.push(newPathName);
  // };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={searchManufacturer}
          setManufacturer={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="Car model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}
