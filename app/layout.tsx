import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "山水之间｜云南亲子旅行计划",
    template: "%s｜山水之间",
  },
  description:
    "2026年9月上海出发，大理与丽江9天8晚亲子旅行：逐日时间表、交通、门票、安全、预算与雨季行李清单。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "山水之间｜云南亲子旅行计划",
    description: "给喜欢跑、爬、骑和动手的5岁男孩，一份松弛但不无聊的九日云南旅行手账。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/yunnan-social-cover.png",
        width: 1680,
        height: 945,
        alt: "大理与丽江九日亲子旅行",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
