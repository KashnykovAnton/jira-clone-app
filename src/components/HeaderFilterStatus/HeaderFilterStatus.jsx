import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedStatus } from "../../store/cards/cards-slice-filter";
import s from "./HeaderFilterStatus.module.css";
import Button from "../Button/Button";

const HeaderFilterStatus = () => {
  const dispatch = useDispatch();
  const { selectedStatus } = useSelector(selectFilters);

  const handleStatusChange = (event) => {
    dispatch(setSelectedStatus(event.target.value));
  };

  const handleResetStatusFilter = () => {
    dispatch(setSelectedStatus(null));
  };

  const renderStatusFilter = () => {
    const statuses = ["TODO", "In Progress", "Done"];
    return statuses.map((status) => (
      <label key={status}>
        <input
          type="radio"
          value={status}
          name="status"
          checked={selectedStatus === status}
          onChange={handleStatusChange}
        />
        {status}
      </label>
    ));
  };

  return (
    <div>
      <fieldset className={s.statusFilter}>
        <legend>Filter by Status</legend>
        {renderStatusFilter()}
        <Button onClick={handleResetStatusFilter} styleButton={"red"}>
          Reset status filter
        </Button>
      </fieldset>
    </div>
  );
};

export default HeaderFilterStatus;
