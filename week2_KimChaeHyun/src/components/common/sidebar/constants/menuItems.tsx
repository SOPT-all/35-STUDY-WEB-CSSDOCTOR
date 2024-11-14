import { ReactNode } from "react";
import { IcAdd, IcExplore, IcHome, IcLike, IcReels, IcSearch, IcShare } from "@assets/svgs";
import user from "@assets/user.jpg";

export interface MenuItem {
  icon: ReactNode;
  label: string;
}

export const menuItems: MenuItem[] = [
  { icon: <IcHome />, label: "홈" },
  { icon: <IcSearch />, label: "검색" },
  { icon: <IcExplore />, label: "탐색 탭" },
  { icon: <IcReels />, label: "릴스" },
  { icon: <IcShare />, label: "메시지" },
  { icon: <IcLike />, label: "알림" },
  { icon: <IcAdd />, label: "만들기" },
  { icon: <img src={user} />, label: "프로필" },
];
