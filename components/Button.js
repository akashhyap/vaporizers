import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ blok }) => {
  // console.log("sec header", blok);
  let textAlign = (val) => {
    switch (blok.textAlign) {
      case "text-left":
        return "textLeft";
        break;
      case "text-center":
        return "textCenter";
        break;
      case "text-right":
        return "textRight";
        break;
      default:
        return "textLeft";
        break;
    }
  };
  let bgColor = (val) => {
    switch (blok.bgColor) {
      case "bg-slate-100":
        return "bgSlate100";
        break;
      case "bg-slate-900":
        return "bgSlate900";
        break;
      case "bg-black":
        return "bgBlack";
        break;
      case "bg-brown":
        return "bgBrown";
        break;
      case "bg-gray-100":
        return "bgGray100";
        break;
      case "bg-231f20":
        return "bg-231f20";
        break;
      default:
        return "bgTransparent";
        break;
    }
  };
  return (
    <div className={`${textAlign(blok.textAlign)} mt-10`}>
      <Link href={blok.link.cached_url} className={`${bgColor(blok.bgColor)} p-3 rounded-md`}>{blok.label}</Link>
    </div>
  );
};

export default Button;
