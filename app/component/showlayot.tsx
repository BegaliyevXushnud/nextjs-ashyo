"use client";

import { usePathname } from "next/navigation";

interface ShowLayoutProps {
  children: React.ReactNode;
}

export default function ShowLayout({ children }: ShowLayoutProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";

  return !(isLoginPage || isRegisterPage) ? children : null;
}
