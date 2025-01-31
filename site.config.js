const CONFIG = {
  // profile setting (required)
  profile: {
    name: "dagyeong",
    image: "/apple-touch-icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "data analyst",
    bio: "hi !",
    email: "hdk990425@gmail.com",
    linkedin: "",
    github: "DagyeongH",
    instagram: "",
  },
  projects: [
    {
      name: `[PlayData] Data_Analysis_33`,
      href: "https://gangda.notion.site/PlayData-Data_Analysis_Track_33-63305f9eaaa74e5c8b0388c351dc186c?pvs=4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "LOG (Life Of Gang-e)",
    description: "welcome to my log!",
  },

  // CONFIG configration (required)
  link: "https://gangda-log.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "DagyeongH/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
