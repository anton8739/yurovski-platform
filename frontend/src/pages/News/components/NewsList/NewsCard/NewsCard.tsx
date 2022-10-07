import {FC} from "react";

import './NewsCard.scss'
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import {Button, Popconfirm} from "antd";
import {useActions} from "../../../../../hooks/useActions";
import {INews} from "../../../../../models/INews";

interface Props {
    news: INews
}

const NewsCard: FC<Props> = ({news}) => {
    const {deleteNews,updateNews} = useActions();
    const deleteFunction = () => {
    }
    return (<div className="news-card">
        <div className="card-title">
            {news.title}
        </div>
        <div className="card-content">
            {news.content}
        </div>
        <div className="card-footer">
            <div className="card-footer-item">
                <Button
                    icon={<EditOutlined/>}
                />
            </div>
            <div className="card-footer-item">
                <Popconfirm
                    title="Вы уверены, что хотите удалить?"
                    onConfirm={deleteFunction}
                    okText="Да"
                    cancelText="Нет"
                >
                <Button
                    icon={<DeleteOutlined/>}
                />
                </Popconfirm>
            </div>
        </div>
    </div>)
}

export default NewsCard;