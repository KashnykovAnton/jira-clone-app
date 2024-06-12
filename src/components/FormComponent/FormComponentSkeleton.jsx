import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FormComponentSkeleton = () => {
  return (
    <div>
      <form>
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <Skeleton height={30} width="100%" />
            <Skeleton height={20} width="80%" />
          </div>
        ))}
        <div>
          <Skeleton height={50} width="100%" />
        </div>
        <div >
          <Skeleton height={50} width="100%" />
        </div>
        <div >
          <Skeleton height={50} width="100%" />
        </div>
        <div >
          <Skeleton height={40} width={120} style={{ marginRight: '10px' }} />
          <Skeleton height={40} width={120} />
        </div>
      </form>
    </div>
  );
};

export default FormComponentSkeleton;
