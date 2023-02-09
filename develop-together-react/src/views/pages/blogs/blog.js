


import { CCard, CCardBody, CCol, CContainer, CRow } from '@coreui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from "./NewsListPage";

const Blogs = (props) => {

    const [articles, setArticles] = useState(null);
    const [page, setPage] = useState(1);  
    useEffect( () => {
        const loadNews = async (e) => {
            const countryQs = "country=kr";
            const apiKeyQs = "&apiKey=db4defe7779a4b8c9d3d65b8ce37798e";
            const categoryQs =`&category=technology`;
            const page1 = `&page=${page}`
            const pageSize = `&pageSize=10`
            const url = `https://newsapi.org/v2/top-headlines?${countryQs}${categoryQs}${apiKeyQs}${page1}${pageSize}`;
            const response = await axios.get(url)
            
            setArticles(response.data.articles);
        }
        loadNews();
    }, [page]
);

if (!articles) {
    return;
}


    return (
        <div>
            
            {articles.map((article) => {
                return (
                   <><CContainer>
                        <CRow className="justify-content-center">
                            <CCol xs={8}>
                                <CCard>
                                    <CCardBody>
                                        <div className="thumbnail">
                                            <a href={article.url}>
                                                <img src={article.urlToImage} alt="news thumbnail" style={{ width: '100%' }} />
                                            </a>
                                        </div><div className="contents">
                                            <h2>
                                                <a href={article.url} style={{ color: 'black' }}>{article.title}</a>
                                            </h2>
                                            <p>{article.description}</p>
                                        </div>
                                    </CCardBody>
                                </CCard>

                            </CCol>
                        </CRow>
                    </CContainer><br></br></>
                )
            })}
            <div>
                        <Pagination
                            setPage={setPage}
                            page={page}
                            />

                        </div>
        </div>
    );

};

export default Blogs;