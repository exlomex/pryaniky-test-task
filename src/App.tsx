import {
    Suspense, useEffect, useState,
} from 'react';
import { CircularProgress } from '@mui/material';
import { classNames } from './lib/classNames.ts';
import { AppRouter } from './components/AppRouter/AppRouter.tsx';
import { useAppDispatch } from './hooks/useAppDispatch.ts';
import { UserSliceActions } from './store/reducers/UserSlice.ts';
import cls from './App.module.scss';

interface appProps {
  className?: string;
}

export const App = (props: appProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    // const inited = useSelector(getUserAuth);
    const [inited, setInited] = useState(false);

    useEffect(() => {
        if (!inited) {
            dispatch(UserSliceActions.initAuth());
            setInited(true);
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <div className={cls.progressWrapper}>
                <CircularProgress />
            </div>
        );
    }

    return (
      <div className={classNames('wrapper', {}, [className])}>
          <Suspense fallback={''}>
              <AppRouter/>
          </Suspense>
      </div>
    );
};
