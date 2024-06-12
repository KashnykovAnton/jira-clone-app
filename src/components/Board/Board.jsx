import CardsList from "../CardsList/CardsList";
import s from "./Board.module.css";
import StyledLink from "../StyledLink/StyledLink";

const Board = ({ cards }) => {
  return (
    <div className={s.boardContainer}>
      <div className={s.poolsContainer}>
        <div className={s.swimmingPool}>
          <h3 className={s.swimmingPoolTitle}>TODO</h3>
          <CardsList cards={cards} status="TODO" />
        </div>
        <div className={s.swimmingPool}>
          <h3 className={s.swimmingPoolTitle}>In Progress</h3>
          <CardsList cards={cards} status="In Progress" />
        </div>
        <div className={s.swimmingPool}>
          <h3 className={s.swimmingPoolTitle}>Done</h3>
          <CardsList cards={cards} status="Done" />
        </div>
      </div>
      <StyledLink url={"/create"}>Create New Sprint Item</StyledLink>
    </div>
  );
};

export default Board;
