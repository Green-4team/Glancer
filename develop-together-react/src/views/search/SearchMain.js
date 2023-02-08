
import React, { useEffect, useState } from 'react'

import {} from "@coreui/react"
import SearchList from "./SearchList";
import axios from 'axios';

const SearchMain = (props) => {

    
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [category, setCategory] = useState("freelancer");
    const [searchResults, setSearchResults] = useState(0);
    const [results, setResults] = useState(null);
    const [page, setPage] = useState(1);

    const url = `http://127.0.0.1:8081/search/`;

    useEffect(() => {
        if ( searchResults !== 0 ) {
            const loadSearchList = async (e)  => {
                const response = await axios.get(
                    url + `${category}`, 
                    {params:{searchKeyword : searchKeyword}}
                    ).catch(function() {
                        console.log('검색 실패');
                    });
                setResults(response.data.results);
            };
            loadSearchList();
        }
    }, [url, category, searchResults, searchKeyword])

    const btnClickHandler = e => {
        const { name } = e.target;
        setCategory(name);
        setPage(1);
    };

    const searchClickHandler = e => {
        setSearchResults(1)
    };

    console.log("category : " + category)
    
    return (
        <>
        <input onChange={(e)=>{
            setSearchKeyword(e.target.value);
            setSearchResults(0);
            }}/>
        <button
        onClick={ () => searchClickHandler(results) }
        >검색</button>

        <br/>
        <button
            onClick={btnClickHandler}
            name="freelancer"
        >개발자</button>
        <button
            onClick={btnClickHandler}
            name="project"
        >프로젝트</button>
        <button
            onClick={btnClickHandler}
            name="teacher"
        >강사</button>
        <button
            onClick={btnClickHandler}
            name="education"
        >강의</button>

        <br/>
        {
            searchResults !== 0 && results !== null
            ?
            results.map( () => {
                return (<SearchList searchKeyword={ searchKeyword } category={ category } page={ page }/>);
            })
            :
            <searchList/>
        }
        </>

    );
};

export default SearchMain;
