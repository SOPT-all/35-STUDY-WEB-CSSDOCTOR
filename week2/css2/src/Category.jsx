import style from './App.module.css';

const Category = ({ categoryContent }) => {
  return (
    <>
      <div className={style.categorySet}>
        <span className={style.icon}>{categoryContent.icon}</span>
        <p className={style.categoryName}>{categoryContent.categoryName}</p>
      </div>
    </>
  );
};

export default Category;
