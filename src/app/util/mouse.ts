import { useState, useEffect } from "react";

// マウスの位置を取得するカスタムフック
export function useMousePosition() {
  // マウスの位置を保持するステート
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // マウスの位置を更新する関数
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    // マウスムーブイベントのリスナーを追加
    window.addEventListener("mousemove", updateMousePosition);
    
    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // 現在のマウスの位置を返す
  return mousePosition;
}