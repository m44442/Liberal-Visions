import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import debugScreens from 'tailwindcss-debug-screens';

// Tailwind CSS の設定
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ソースディレクトリ内のすべてのファイルを対象
    "./app/**/*.{js,ts,jsx,tsx}", // アプリディレクトリ内のすべてのファイルを対象
    "./mdx-components.tsx", // 特定のファイルを対象
    "content/**/*.mdx", // コンテンツディレクトリ内のすべての MDX ファイルを対象
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""', // コードブロックの前に追加されるコンテンツを空に設定
            },
            "code::after": {
              content: '""', // コードブロックの後に追加されるコンテンツを空に設定
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" }, // 引用ブロックの最初の段落の前に追加されるコンテンツを無効化
            "blockquote p:first-of-type::after": { content: "none" }, // 引用ブロックの最初の段落の後に追加されるコンテンツを無効化
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans], // sans フォントファミリーにカスタムフォントを追加
        display: ["var(--font-calsans)"], // display フォントファミリーにカスタムフォントを追加
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))", // 放射状グラデーションの背景画像を追加
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards", // フェードインアニメーションを追加
        title: "title 3s ease-out forwards", // タイトルアニメーションを追加
        "fade-left": "fade-left 3s ease-in-out forwards", // 左からフェードインアニメーションを追加
        "fade-right": "fade-right 3s ease-in-out forwards", // 右からフェードインアニメーションを追加
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%", // アニメーション開始時の透明度
          },
          "75%": {
            opacity: "0%", // アニメーション途中の透明度
          },
          "100%": {
            opacity: "100%", // アニメーション終了時の透明度
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)", // アニメーション開始時の位置
            opacity: "0%", // アニメーション開始時の透明度
          },
          "30%": {
            transform: "translateX(0%)", // アニメーション途中の位置
            opacity: "100%", // アニメーション途中の透明度
          },
          "100%": {
            opacity: "0%", // アニメーション終了時の透明度
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)", // アニメーション開始時の位置
            opacity: "0%", // アニメーション開始時の透明度
          },
          "30%": {
            transform: "translateX(0%)", // アニメーション途中の位置
            opacity: "100%", // アニメーション途中の透明度
          },
          "100%": {
            opacity: "0%", // アニメーション終了時の透明度
          },
        },
        title: {
          "0%": {
            "line-height": "0%", // アニメーション開始時の行間
            "letter-spacing": "0.25em", // アニメーション開始時の文字間
            opacity: "0", // アニメーション開始時の透明度
          },
          "25%": {
            "line-height": "0%", // アニメーション途中の行間
            opacity: "0%", // アニメーション途中の透明度
          },
          "80%": {
            opacity: "100%", // アニメーション途中の透明度
          },
          "100%": {
            "line-height": "100%", // アニメーション終了時の行間
            opacity: "100%", // アニメーション終了時の透明度
          },
        },
      },
    },
  },
  plugins: [
    typography, // タイポグラフィプラグインを追加
    debugScreens, // デバッグスクリーンプラグインを追加
  ],
}

export default config;
