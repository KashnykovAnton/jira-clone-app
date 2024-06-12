import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import headerStyles from "./Header.module.css";
import buttonStyles from "../Button/Button.module.css";
import filterGroupsStyles from "../HeaderFilterGroups/HeaderFilterGroups.module.css";
import filterStatusStyles from "../HeaderFilterStatus/HeaderFilterStatus.module.css";
import sortImportanceStyles from "../HeaderSortImportance/HeaderSortImportance.module.css";
import sortAlphabetStyles from "../HeaderSortAlphabet/HeaderSortAlphabet.module.css";

const HeaderSkeleton = () => {
  const s = {
    ...headerStyles,
    ...buttonStyles,
    ...filterGroupsStyles,
    ...filterStatusStyles,
    ...sortImportanceStyles,
    ...sortAlphabetStyles,
  };

  return (
    <div className={s.headerContainer}>
      <Skeleton height={40} width={200} className={s.boardTitle} />
      <Skeleton height={30} width={150} className={s.sprintTitle} style={{ marginTop: '10px', marginBottom: '30px' }} />

      <div className={s.groupsWrapper}>
        <ul className={s.groupsList}>
          {[...Array(4)].map((_, index) => (
            <li key={index} className={s.groupsItem}>
              <Skeleton height={20} width={100} />
            </li>
          ))}
        </ul>
        <Skeleton height={30} width={150} className={s.buttonBase} />
      </div>

      <div className={s.filterAndSortWrapper}>
        <div>
          <fieldset className={s.statusFilter}>
            <legend><Skeleton height={20} width={120} /></legend>
            {[...Array(3)].map((_, index) => (
              <label key={index}>
                <Skeleton height={20} width={20} style={{ marginRight: '10px' }} />
                <Skeleton height={20} width={100} />
              </label>
            ))}
          </fieldset>
        </div>

        <div className={s.sortContainer}>
          <Skeleton height={20} width={150} className={s.sortTitle} />
          <Skeleton height={30} width={200} className={s.select} style={{ marginTop: '10px' }} />
        </div>

        <div>
          <Skeleton height={20} width={150} className={s.sortTitle} />
          <div className={s.alphabeticalSortContainer}>
            <Skeleton height={20} width={20} style={{ marginRight: '10px' }} />
            <Skeleton height={20} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderSkeleton;
