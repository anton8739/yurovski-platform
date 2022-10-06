
import NewsCard from "./NewsCard/NewsCard";
import './NewsList.scss'
import {FC, useEffect} from "react";
import {INews} from "../../../../store/reducers/news/types";
interface Props {
    news : INews[]
}
const NewsList:FC<Props> = ({news}) => {

    return (<div className="news-list">
        {news.map(news => <NewsCard news={news}/>)}
    </div>)
}

export default NewsList;