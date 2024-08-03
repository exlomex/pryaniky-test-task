import { classNames } from './lib/classNames.ts';
import { AppRouter } from './components/AppRouter/AppRouter.tsx';

interface appProps {
  className?: string;
}

export const App = (props: appProps) => {
    const { className } = props;

    return (
      <div className={classNames('wrapper', {}, [className])}>
          <AppRouter/>
      </div>
    );
};
