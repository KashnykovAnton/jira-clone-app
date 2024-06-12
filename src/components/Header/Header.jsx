import { useSelector } from "react-redux";
import Title from "../Title/Title";
import HeaderFilterGroups from "../HeaderFilterGroups/HeaderFilterGroups";
import HeaderFilterStatus from "../HeaderFilterStatus/HeaderFilterStatus";
import HeaderSortImportance from "../HeaderSortImportance/HeaderSortImportance";
import HeaderSortAlphabet from "../HeaderSortAlphabet/HeaderSortAlphabet";
import HeaderSkeleton from "./HeaderSkeleton";
import { selectLoader } from "../../store/cards/cards-selectors";
import s from "./Header.module.css";

const Header = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <div className={s.headerContainer}>
      {isLoading && <HeaderSkeleton />}
      {!isLoading && (
        <>
          <h1 className={s.boardTitle}>Tasks board</h1>
          <Title>Sprint #1</Title>
          <HeaderFilterGroups />
          <div className={s.filterAndSortWrapper}>
            <HeaderFilterStatus />
            <HeaderSortImportance />
            <HeaderSortAlphabet />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
