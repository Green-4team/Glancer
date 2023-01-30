import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import TeacherImg from 'src/assets/images/teacher.jpg'
import { Link } from 'react-router-dom'
import { Title } from 'chart.js'


const Cards = () => {

    
  return (
            
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <CCol xs>
                  <CCard>
                  <Link to="/class/movieDetail"> 
                </Link>        
                    <CCardImage orientation="top" src={TeacherImg} />
                    <CCardBody>
                      <CCardTitle>소개 글</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-medium-emphasis">강사 평점 : </small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
  )
}

export default Cards
