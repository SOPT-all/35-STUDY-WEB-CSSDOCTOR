import styles from "./Sidebar.module.css";
import { SIDEBAR_ITEMS } from "./../constants/sidebarList";
import { useSidebar } from "./../hooks/useSidebar";

const Sidebar = () => {
  const {
    collapsedSections,
    toggleSection,
    selectedOptions,
    toggleOption,
    animatingSections,
    handleAnimationEnd,
  } = useSidebar(SIDEBAR_ITEMS);

  return (
    <aside className={styles.sidebar}>
      {SIDEBAR_ITEMS.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(sectionIndex)}
          >
            {section.title}
            <span>{collapsedSections[sectionIndex] ? "-" : "+"}</span>
          </div>
          {(collapsedSections[sectionIndex] ||
            animatingSections[sectionIndex]) && (
            <div
              className={`${styles.sectionContent} ${
                collapsedSections[sectionIndex]
                  ? styles.slideDown
                  : styles.slideUp
              }`}
              onAnimationEnd={() => handleAnimationEnd(sectionIndex)}
            >
              {section.search && (
                <input
                  type="text"
                  placeholder="결과 내 검색"
                  className={styles.searchInput}
                />
              )}
              <ul>
                {section.options.map((option, idx) => (
                  <li
                    key={idx}
                    className={styles.optionWrapper}
                    onClick={() => toggleOption(sectionIndex, option)}
                  >
                    <div
                      className={`${styles.option} ${
                        selectedOptions[sectionIndex]?.includes(option)
                          ? styles.selected
                          : ""
                      }`}
                    ></div>
                    <p>{option}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </aside>
  );
};

export default Sidebar;
