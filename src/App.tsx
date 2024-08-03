import { classNames } from './lib/classNames.ts';

interface appProps {
  className?: string;
}

export const App = (props: appProps) => {
    const { className } = props;

    return (
      <div className={classNames('', {}, [className])}>1313</div>
    );
};
