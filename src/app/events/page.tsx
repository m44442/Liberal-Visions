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
  {
    id: 3,
    title: 'イベントC',
    description: 'イベントCの詳細説明。',
    date: '2023-11-01',
  },
  {
    id: 4,
    title: 'イベントD',
    description: 'イベントDの詳細説明。',
    date: '2023-11-15',
  },
];

const Events = () => {
  const [events] = useState(initialEvents);

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
        Events
      </h1>
      <div className="flex flex-wrap justify-center gap-10 w-full px-8 mt-8 m:w-full md:w-3/4 lg:w-2/3">
        {events.map((event) => (
          <div key={event.id} className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full max-w-xs h-96 md:w-3/4 lg:w-2/3 trasition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-center mt-2">{event.description}</p>
            <p className="text-center mt-2">{event.date}</p>
            <button className="absolute top-2 right-2 text-sm text-blue-500" onClick={() => alert(`イベント${event.id}の詳細を表示`)}>
              詳細
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Events;