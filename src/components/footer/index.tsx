import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#00000056] py-8">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-2">
        <div className="mt-2">
          <div className="flex gap-2 text-base items-center">
            <BsFillTelephoneFill className="text-sm" />
            010-4576-9690
          </div>
          <div className="flex gap-2 text-base items-center">
            <MdOutlineEmail />
            kmertvv531@gmail.com
          </div>
          <div className="flex gap-2 text-base items-center">
            <IoLocationOutline />
            경기도 고양시 덕양구 행신동
          </div>
        </div>
        <div className="flex gap-2 text-2xl justify-end items-end">
          <a
            href="https://github.com/hoptt"
            target="_blank"
            className="flex items-center gap-1 hover:text-gray-800"
          >
            <FaGithub />
          </a>
          <a
            href="https://velog.io/@jamee_/posts"
            target="_blank"
            className="flex items-center gap-1  hover:text-gray-800"
          >
            <img alt="" src="/assets/images/velog.webp" width={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
