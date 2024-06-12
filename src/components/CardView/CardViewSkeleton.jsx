import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from "./CardView.module.css";

const CardViewSkeleton = () => {
  return (
    <div className={s.cardContainer}>
      <h2 className={s.cardHeader}>
        <Skeleton width={200} />
      </h2>
      <div className={s.cardDetails}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={s.cardDetailItem}>
            <Skeleton height={25} width="60%" />
            <Skeleton height={25} width="90%" />
          </div>
        ))}
      </div>
      <div className={s.buttonContainer}>
        <Skeleton height={40} width={100} style={{ marginRight: "10px" }} />
        <Skeleton height={40} width={100} />
      </div>
    </div>
  );
};

export default CardViewSkeleton;
