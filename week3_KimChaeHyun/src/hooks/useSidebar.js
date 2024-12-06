import { useState } from "react";

export const useSidebar = (sidebarItems) => {
  const [collapsedSections, setCollapsedSections] = useState(
    sidebarItems.map((item) => item.defaultOpen ?? false)
  );
  const [selectedOptions, setSelectedOptions] = useState({});
  const [animatingSections, setAnimatingSections] = useState({});

  // 아코디언
  const toggleSection = (index) => {
    setAnimatingSections((prev) => ({ ...prev, [index]: true }));
    setCollapsedSections((prev) =>
      prev.map((collapsed, i) => (i === index ? !collapsed : collapsed))
    );
  };

  // 체크박스/라디오 버튼
  const toggleOption = (sectionIndex, option) => {
    const sectionType = sidebarItems[sectionIndex].type;

    setSelectedOptions((prev) => {
      const sectionOptions = prev[sectionIndex] || [];
      if (sectionType === "radio") {
        return {
          ...prev,
          [sectionIndex]: [option], // 변경
        };
      } else {
        return {
          ...prev,
          [sectionIndex]: sectionOptions.includes(option)
            ? sectionOptions.filter((item) => item !== option) // 해제
            : [...sectionOptions, option], // 추가
        };
      }
    });
  };

  // 애니메이션 완료
  const handleAnimationEnd = (index) => {
    setAnimatingSections((prev) => ({ ...prev, [index]: false }));
  };

  return {
    collapsedSections,
    toggleSection,
    selectedOptions,
    toggleOption,
    animatingSections,
    handleAnimationEnd,
  };
};
