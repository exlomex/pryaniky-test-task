import { classNames } from '../../lib/classNames.ts';
import { Table } from '../../components/Table';
import { NavBar } from '../../components/NavBar';

interface InfoPageProps {
    className?: string;
}

const InfoPage = (props: InfoPageProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <NavBar/>
            <Table/>
        </div>
    );
};

export default InfoPage;
