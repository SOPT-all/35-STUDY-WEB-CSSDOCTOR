export const SIDEBAR_ITEMS = [
  {
    title: "성별",
    type: "radio",
    options: ["전체", "남성", "여성"],
    defaultOpen: true,
  },
  {
    title: "카테고리",
    type: "checkbox",
    options: ["전체보기", "의류", "슈즈", "액세서리", "백"],
    defaultOpen: true,
  },
  {
    title: "브랜드",
    type: "checkbox",
    search: true,
    options: [
      "(DI)VISION",
      "032C",
      "1017 ALYX 9SM",
      "16ARLINGTON",
      "1989 studio",
      "44 LABEL GROUP",
      "A-COLD-WALL",
      "A.P.C.",
    ],
    defaultOpen: true,
  },
  {
    title: "색상",
    type: "radio",
    options: [],
  },
  {
    title: "사이즈",
    type: "radio",
    options: [],
  },
  {
    title: "가격",
    options: [],
  },
];
