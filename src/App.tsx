import {
    Suspense, useEffect, useLayoutEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from './lib/classNames.ts';
import { AppRouter } from './components/AppRouter/AppRouter.tsx';
import { useAppDispatch } from './hooks/useAppDispatch.ts';
import { UserSliceActions } from './store/reducers/UserSlice.ts';
import { getUserAuth } from './store/selectors/getUserAuth.tsx';

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
            <div>loading</div>
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
