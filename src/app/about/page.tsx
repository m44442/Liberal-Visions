import Link from "next/link";
import React, { useState } from "react";
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

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-white">
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
              aria-label="Toggle navigation"
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
      {/* グラデーションライン */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
      {/* パーティクルエフェクト */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {/* メインタイトル */}
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        About Us
      </h1>
      {/* 会社概要 */}
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg animate-fade-in">
        <p className="text-lg mb-2"><strong>株式会社Liberal Visions</strong></p>
        <p className="text-lg mb-2"><strong>代表者名:</strong> ヒガブ中井オマル</p>
        <p className="text-lg mb-2"><strong>資本金:</strong> 100万円</p>
        <p className="text-lg mb-2"><strong>所在地:</strong> 〒105-0022 東京都港区海岸2丁目-1-16 鈴与浜松町ビル8F</p>
        <p className="text-lg mb-2"><strong>設立年月日:</strong> 2024年9月24日</p>
        <p className="text-lg mb-2"><strong>事業内容:</strong> イベント事業、採用コンサル、SNS運用、営業代行</p>
      </div>
    </main>
  );
};

export default About;