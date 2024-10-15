"use client";
import React from 'react';
import Link from 'next/link';
import Particles from '../components/particles';

// ナビゲーションリンクの配列
const navigation = [
  { name: 'Top', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Member', href: '/member' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events', href: '/events' },
  { name: 'Recruitment', href: '/recruitment' },
  { name: 'Contact', href: '/contact' },
];

const Recruitment = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      {/* ナビゲーションバー */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm duration-500 text-black hover:text-gray-700">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      {/* グラデーションライン */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
      {/* パーティクルエフェクト */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text mb-8">
        Recruitment
      </h1>
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
    </main>
  );
};

export default Recruitment;