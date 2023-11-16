"use client";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/auth/signup">
        <button className="font-bold bg-white  w-40  h-10 border rounded-sm  ">
          Go To Sign Up Page
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
