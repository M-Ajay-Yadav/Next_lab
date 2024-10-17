// import React from 'react'
"use client";
import { useRouter } from "next/navigation";

const LearnUseRouter = () => {
  const router = useRouter();
  console.log("Router", router);
  return (
    <>
      <h1>useing Router</h1>
      <button type="button" onClick={() => router.push("/admin/dashboard")}>
        Go to Admin Dash
      </button>
    </>
  );
};

export default LearnUseRouter;
