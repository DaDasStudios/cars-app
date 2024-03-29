import { MouseEventHandler } from "react";

export type ReactState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (menufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[]
  setFilter: ReactState<any>
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: ReactState<number>
}


export interface SearchBarProps {
  setManufacturer: ReactState<string>
  setModel: ReactState<string>
}