import React from "react";
import Link from "next/link";
import Particles from "../components/particles";

// ナビゲーションリンクの配列
const navigation = [
  { name: "Top", href: "/" },
  { name: "About", href: "/about" },
  { name: "Member", href: "/member" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/event" },
  { name: "Recruitments", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
];

const Projects = () => {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-gray-200 to-white">
            {/* ナビゲーションバー */}
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
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
            </nav>
            {/* グラデーションライン */}
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
            {/* パーティクルエフェクト */}
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text mb-8 pb-2">
                Projects
            </h1>
            {/* 事業内容のスペース */}
            <div className="flex flex-col items-center justify-center w-full h-96 bg-gray-100">
                <p className="text-lg text-gray-500">ここに事業内容を追加します。</p>
            </div>
        </main>
    );
};

export default Projects;