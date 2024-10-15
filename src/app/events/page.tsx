"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Particles from '../components/particles';

// ナビゲーションリンクの配列
const navigation = [
  { name: 'Top', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Member', href: '/member' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events', href: '/events' },
  { name: 'Recruitments', href: '/recruitment' },
  { name: 'Contact', href: '/contact' },
];

// イベントデータの例
const initialEvents = [
  {
    id: 1,
    title: 'イベントA',
    description: 'イベントAの詳細説明。',
    date: '2023-10-01',
  },
  {
    id: 2,
    title: 'イベントB',
    description: 'イベントBの詳細説明。',
    date: '2023-10-15',
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
              aria-label="Toggle navigation menu"
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
      {/* イベントリスト */}
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">イベント一覧</h1>
        <ul>
          {initialEvents.map((event) => (
            <li key={event.id} className="mb-4">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p>{event.description}</p>
              <p className="text-gray-600">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}