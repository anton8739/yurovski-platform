import NewsList from "./components/NewsList/NewsList";
import './News.scss'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect, useState} from "react";
import {Button, Spin} from "antd";
import {INews} from "../../store/reducers/news/types";

const News = () => {
    const {getNews, createNews} = useActions();
    const [loading, setLoading] = useState(false)
    const {news} = useTypedSelector(state => state.news)
    useEffect(() => {
        const initPage = async () => {
            setLoading(true)
            await getNews()
            setLoading(false)
        }
        initPage()
    }, [])
    const createNewNews = () => {
        const news:INews = {
            title : "New1",
            content: "Description1"
        }
        createNews(news)
    }
    return (
        <>
            {loading ? <div className="spinner"><Spin/></div>
                : <div className="page-news">
                    <Button
                        className="create-news-btn"
                        onClick={createNewNews}
                    >
                        Создать новость
                    </Button>
                    <NewsList news={news}/>
                </div>
            }
        </>)
}

export default News;