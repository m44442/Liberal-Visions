"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Particles from '../components/particles';

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

// メンバー情報の配列
const members = [
  {
    name: "Founder/CEO ヒガブ中井オマル",
    description: "早稲田大学国際教学部4年。大学1年次、営業インターンとして記録的な成果を残す。その後、数々の学生団体や大型プロジェクトを率い、リーダーシップとビジョンを磨く。若い世代の課題に着目し、日本での起業を果たす。",
    image: "/images/omar.jpg", // 画像のパス
  },
  {
    name: "Founder/COO 草野匠",
    description: "慶應義塾大学法学部法律学科3年。北海道札幌市出身。大学1年次より、戦略コンサルティングファームで長期インターンを開始。現在は株式会社サイバーエージェント・インターネット広告事業本部にて長期インターンに従事。CEOオマールと出会い、株式会社Liberal Visions を創業。",
    image: "/images/kusano.jpg", // 画像のパス
  },
];

export default function Home() {
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
              title="Toggle navigation"
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
      {/* パーティクルエフェクト */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {/* メンバー情報 */}
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">メンバー紹介</h1>
        <ul>
          {members.map((member) => (
            <li key={member.name} className="mb-4">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p>{member.description}</p>
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mt-4" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}