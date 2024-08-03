import { classNames } from '../../lib/classNames.ts';
import { Table } from '../../components/Table';

interface InfoPageProps {
    className?: string;
}

const InfoPage = (props: InfoPageProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Table/>
        </div>
    );
};

export default InfoPage;
