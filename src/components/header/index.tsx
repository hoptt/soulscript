import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <div>
      <nav className="flex z-10 h-11 max-w-screen-xl mx-auto px-8">
        <ul className="flex flex-1 items-center gap-5">
          <li>
            <a
              href="https://github.com/hoptt"
              target="_blank"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-800"
            >
              <FaGithub />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@jamee_/posts"
              target="_blank"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-800"
            >
              <img alt="" src="/assets/images/velog.webp" width={20} />
              velog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
