"use client";
import React, { useState } from "react";
import Link from "next/link";
import Particles from "../components/particles";

// ナビゲーションリンクの配列
const navigation = [
  { name: "Top", href: "/" },
  { name: "About", href: "/about" },
  { name: "Member", href: "/member" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Recruitments", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
];

const Recruitment = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-gray-200 to-white">
      {/* ナビゲーションバー */}
      <nav className="my-16 animate-fade-in">
        <div className="flex items-center justify-between w-full px-4 md:px-8">
          <ul className="hidden md:flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-black hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              title={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-black hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
      <h1 className="text-4xl font-bold mb-8">Recruitment</h1>
      <div className="flex flex-col items-center w-full px-4 mt-8">
        <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">応募概要</h2>
          <p className="text-gray-600 mb-4">
            メッセージなど
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>求める人材など</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">応募先</h2>
          <p className="text-gray-600 mb-4">
            応募をご希望の方は、以下のメールアドレスに履歴書と職務経歴書をお送りください。
          </p>
          <p className="text-blue-500">recruit@example.com</p>
        </div>
      </div>
      {/* パーティクルエフェクト */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
    </main>
  );
};

export default Recruitment;