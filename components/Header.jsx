import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import {
  BsFillTelephoneFill,
  BsTwitter,
  BsYoutube,
  BsChevronDown,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import Hero from "./Hero";
export default function Header() {
  const links = [
    {
      name: "Home",
      path: "/#",
    },
    {
      name: "Services",
      path: "/#",
    },
    {
      name: "Portfolio",
      path: "/#",
    },
    {
      name: "Blog",
      path: "/#",
    },
    {
      name: "Pages",
      path: "/#",
    },
    {
      name: "About",
      path: "/#",
    },
  ];
  console.log(links);
  return (
    <div className="Header">
      <div className="top-header spaceBtn">
        <div className="left-top-Header df">
          <Link href={"#"} className="email">
            <p>
              <span>
                <MdEmail />
              </span>{" "}
              info@example.com
            </p>
          </Link>
          <div className="phone-numb">
            <p>
              <span>
                <BsFillTelephoneFill />
              </span>{" "}
              +880 1688 33300
            </p>
          </div>
        </div>
        <div className="right-top-Header df">
          <p>
            <FaFacebookF />
          </p>
          <p>
            <BsTwitter />
          </p>
          <p>
            <BsYoutube />
          </p>
          <p>
            <AiFillLinkedin />
          </p>
        </div>
      </div>
      <div className="navBar-header spaceBtn">
        <div className="leftNav center">
          <Image src={"/images/logo.svg"} alt="" width={20} height={40} />
        </div>
        <div className="midNav center df">
          {links.map((link) => (
            <Link href={link.path}>
              {link.name}
              <BsChevronDown />
            </Link>
          ))}
        </div>
        <div className="rightNav center">
          <Button
            className="Btn"
            messege={"Let's Talk "}
            icon={<BiRightArrowAlt className="arrowIc center" />}
          />
          <GiHamburgerMenu className="hamMenu" />
        </div>
      </div>
      <Hero />
    </div>
  );
}
