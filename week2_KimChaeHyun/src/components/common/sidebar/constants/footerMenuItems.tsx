import { IcBurger, IcNew, IcThread } from "@assets/svgs";
import { ReactNode } from "react";

export interface FooterMenuItem {
  icon: ReactNode;
  label: string;
  hoverIcon?: ReactNode;
}

export const footerMenuItems: FooterMenuItem[] = [
  { icon: <IcThread />, label: "Threads", hoverIcon: <IcNew /> },
  { icon: <IcBurger />, label: "더 보기" },
];
