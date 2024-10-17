// import React from "react";

import Link from "next/link";

const LearnLink = () => {
  const id = 2;
  return (
    <>
      <h1>will continue from 52.59 useRouter() hook</h1>
      <Link href="/admin/dashboard" target="_blank">
        Go to Admin DashBoard
      </Link>
      <Link href={`/user/profile/${id}`}>Go to user Profile</Link>
    </>
  );
};

export default LearnLink;
