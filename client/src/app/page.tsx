"use client";
import { BrandBar } from "@/components/BrandBar";
import NavBar from "@/components/NavBar";
import Skeleton from "@/components/Skeleton";

export default function Home() {

  return (
    <div className="">
      <BrandBar />
      <NavBar />
      <div className="banner">
        <div className="w-[500px] h-[500px]"><Skeleton /></div>
      </div>
      <div className="flex h-screen">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}
