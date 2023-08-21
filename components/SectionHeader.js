import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const SectionHeader = ({ blok }) => {
//   console.log("sec header", blok);
  return (
    <div className="flex flex-wrap justify-between items-center">
      <h2 className="text-4xl font-bold">{blok.title}</h2>
      <div className="flex items-center mt-3 lg:mt-0">
        <Link
          href={blok.link.cached_url}
          className="text-indigo-600 text-sm"
        >
          {blok.linkLabel}
        </Link>
        <AiOutlineArrowRight className="ml-2 text-sm text-indigo-600"/>
      </div>
    </div>
  );
};

export default SectionHeader;
