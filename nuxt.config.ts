import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 公式のチュートリアル通りだと動かない
  // 対応issue:
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"], // <= ドキュメントからさらに追加
});
