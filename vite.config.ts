import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: { //기본 롤업 번들을 직접 사용자 설정합니다.
      input: { app: "index.html" }, // 어떤 파일부터 불러올지 정함. 
      output: { //최종 아웃풋 설정
        format: "esm", // iife, cjs, esm
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: (assetInfo: { name: string; }) => { //정적인 파일 설정
          if (/\.css$/.test(assetInfo.name)) { // css만 파일이름 변경
            return "style[extname]";
          }
          return "[name]-[hash][extname]";
        },
      },
    },
  },
})
