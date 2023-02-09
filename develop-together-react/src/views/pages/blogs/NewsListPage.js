import { cilChevronLeft, cilChevronRight } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import styled from "styled-components";

function SearchPagination({ page, setPage }) {

    const start = Math.max(page - 2, 1);
    const pages = [];
    const [pageInputNum, setPageInputNum] = useState(0);

    
    for (let idx = start; idx < 8; idx++) {
        pages.push(idx);
    }  
    
    
    return (
        <>
        <Nav>
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <CIcon style={{width:17, verticalAlign: 'middle'}} icon={cilChevronLeft} customClassName="nav-icon" />
            </Button>
            {
                start > 2
                ?
                <>
                <Button onClick={() => setPage(1)}>
                1
                </Button>
                <p> … </p>
                </>
                : (
                    start > 1
                    ?
                    <>
                    <Button onClick={() => setPage(1)}>
                    1
                    </Button>
                    </>
                    :
                    <p></p>
                ) 
            }
            {
                pages
                .map((i) => (
                    <Button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-current={parseInt(page) === i ? "page" : null}
                    >
                    {i}
                    </Button>
                ))
            }
            <Button onClick={() => setPage(page + 1)}>
            <CIcon style={{width:17, verticalAlign: 'middle'}} icon={cilChevronRight} customClassName="nav-icon" />
            </Button>
        </Nav>
        
        </>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  margin-bottom: 0px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  background-color: transparent;
  color: Black;
  font-size: 1rem;

  &:hover {
    color: Gray;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: LightGray;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    color: royalBlue;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default SearchPagination;