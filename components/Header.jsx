import Link from "next/link";
import React from "react";
import { Divider } from 'antd';
export const Header = () => {
  return (
    <>
    <div className="header">
      <Link href="Home">Home</Link>
      <Link href="Blog">Blog</Link>
      <Link href="About">About</Link>
      <Link href="Contect Us">Contect Us</Link>
    </div>
    <Divider />
    </>
  );
};
