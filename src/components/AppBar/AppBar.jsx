import { Suspense } from 'react';
import s from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import LoaderSpin from '../LoaderSpin/LoaderSpin';

const AppBar = () => {
  return (
    <Suspense fallback={<LoaderSpin/>}>
      <header className={s.header}>
        Jira Clone Application
      </header>
      <Outlet />
    </Suspense>
  );
};

export default AppBar;
