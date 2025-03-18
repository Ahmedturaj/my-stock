"use client";
import dynamic from "next/dynamic";

const Type1 = dynamic(() => import("./Type1Component"), { ssr: false });

export default Type1;
