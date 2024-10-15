import React from 'react';
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

const Member = () => {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-gray-200 to-white overflow-y-auto h-screen">
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
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text mb-8">
         Member
         </h1>
      <div className="grid grid-cols-1 gap-8 animate-fade-in w-full px-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-center mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Member;