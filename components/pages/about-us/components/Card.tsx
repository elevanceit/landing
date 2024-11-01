"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { IconTitledArrow } from "@/assets/icons";

interface CardProps {
  title: string;
  text: string;
  btnText: string;
  icon: StaticImageData;
  iconWhite: StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  btnText,
  icon,
  iconWhite,
}) => {
  return (
    <div className="relative flex flex-col group border border-white/10 pl-20 pr-15 gap-y-6 pt-10 pb-15 w-full md:w-1/2 hover:bg-hover-grey transition duration-700 ease-in-out">
      <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <Button icon={IconTitledArrow} variant="secondary" onClick={() => {}} />
      </div>
      <div className="flex items-center">
        <div className="w-15 h-15 flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="transition-opacity duration-700 ease-in-out group-hover:opacity-0"
          />
          <Image
            src={iconWhite}
            alt={title}
            width={60}
            height={60}
            className="absolute transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-white text-2xl ml-6">{title}</h3>
      </div>
      <p
        className="text-text-darken-3 group-hover:text-text-base transition duration-700 ease-in-out"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Button text={btnText} onClick={() => {}} />
    </div>
  );
};

export default Card;
