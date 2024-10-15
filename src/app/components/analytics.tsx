"use client";

// Analytics コンポーネント
export function Analytics() {
  // 環境変数からトークンを取得
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  
  // トークンが存在しない場合は何も表示しない
  if (!token) {
    return null;
  }
  
  // トークンが存在する場合はスクリプトを返す
  return (
    <script
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      data-token={token}
      async
    />
  );
}