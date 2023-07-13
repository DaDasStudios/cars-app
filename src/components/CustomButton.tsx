"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  btnType = "button",
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
