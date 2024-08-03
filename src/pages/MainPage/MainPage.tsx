import { classNames } from '../../lib/classNames.ts';
import { LoginForm } from '../../components/LoginForm';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <LoginForm/>
        </div>
    );
};

export default MainPage;
