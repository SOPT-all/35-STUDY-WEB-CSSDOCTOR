import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Feed.module.css";
import mockData from "../../assets/data.json";
import DropDown from "./DropDown";

const Feed = () => {
  const [data, setData] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const periodOptions = ["오늘", "이번 주", "이번 달", "올해"];
  const menuOptions = ["공지사항", "태그 목록", "서비스 정책", "Slack"];

  const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[0]);
  const [selectedMenuOption, setSelectedMenuOption] = useState(menuOptions[0]);

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  const handleSelect = (type, option) => {
    if (type === "period") {
      setSelectedPeriod(option);
    } else if (type === "menu") {
      setSelectedMenuOption(option);
    }
    setOpenDropdown(null);
  };

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <main className={styles.feed_container}>
      <div className={styles.feed_category_container}>
        <ul className={styles.feed_category}>
          <li>
            <i className="fa-solid fa-arrow-trend-up"></i>트렌딩
          </li>
          <li>
            <i className="fa-regular fa-clock"></i>최신
          </li>
          <li>
            <i className="fa-solid fa-rss"></i>피드
          </li>
        </ul>

        <div className={styles.feed_menu}>
          <div className={styles.feed_menu_period} onClick={() => toggleDropdown("period")}>
            {selectedPeriod} <i className="fa-solid fa-caret-down"></i>
          </div>
          <i className="fa-solid fa-ellipsis-vertical" onClick={() => toggleDropdown("menu")}></i>

          {openDropdown === "period" && (
            <DropDown
              options={periodOptions}
              handleSelect={(option) => handleSelect("period", option)}
              selectedOption={selectedPeriod}
            />
          )}
          {openDropdown === "menu" && (
            <DropDown
              options={menuOptions}
              handleSelect={(option) => handleSelect("menu", option)}
              selectedOption={selectedMenuOption}
            />
          )}
        </div>
      </div>

      <ul className={styles.feed}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default Feed;
