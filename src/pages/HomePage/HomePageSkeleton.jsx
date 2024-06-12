import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from "../../components/Board/Board.module.css";

const HomePageSceleton = () => {
  return (
    <div className={s.boardContainer}>
          <div className={s.poolsContainer}>
            {[...Array(3)].map((_, index) => (
              <div className={s.swimmingPool} key={index}>
                <Skeleton height={30} width={100} className={s.swimmingPoolTitle} />
                {[...Array(5)].map((_, cardIndex) => (
                  <div key={cardIndex} style={{ marginBottom: "10px" }}>
                    <Skeleton height={50} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Skeleton height={40} width={200} style={{ marginTop: "20px" }} />
        </div>
  )
}

export default HomePageSceleton