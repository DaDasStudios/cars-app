"use client";

import { ShowMoreProps } from "@/types";
// import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext, setLimit }: ShowMoreProps) {
  // const router = useRouter();

  const handleNavigation = () => {
    setLimit((pageNumber + 1) * 10);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
