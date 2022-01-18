import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';


import {CSSTransition} from "react-transition-group"
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;,
  color : ${props => props.색상}
`;

let 버튼들 = styled.div`
margin-left : 10px
margin-right : 10px
padding : 10px`;



function Detail(props) {
  let [매진스위치, 매진스위치변경] = useState(false);
  let [tap,tapChange] = useState(0);
  let [스위치,스위치변경] =useState(false);

  useEffect(() => {
    let 타이머 = setTimeout(() => { 매진스위치변경(true) }, 3000);
    return () => { clearTimeout(타이머) }
  }, [])

  let history = useHistory();
  let { id } = useParams();

  let clikedId = props.shoes.find(function (product) {
    return product.id == id;
  });
  let [인풋, 인풋값] = useState('사장에게 보내고 싶은말을 적어보세요');

  

  return (
    <div className="container" key={clikedId.id} >
      <박스>
        <제목 className='red'>상세페이지</제목>
      </박스>
      {인풋}<br />
      <input onChange={(e) => { 인풋값(e.target.value) }} />
      {매진스위치 === false ? <div className='my-alret2'>
        <p>매진임박.</p>
      </div> : null}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${clikedId.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{clikedId.title}</h4>
          <p>{clikedId.content}</p>
          <p>{clikedId.price}</p>
          <Info 재고={props.재고} />
          <버튼들>
            <button className="btn btn-danger"
              onClick={() => { props.재고변경([9, 11, 12]) }}>주문하기</button>
            <button className="btn btn-danger" onClick={() => { history.goBack(); }}>이전페이지</button>
          </버튼들>
        </div>
        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); tapChange(0)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"onClick={()=>{스위치변경(false); tapChange(1)}}>Option 2</Nav.Link>
          </Nav.Item>
        </Nav>

        
        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent tap={tap} 스위치변경={스위치변경}/>
          </CSSTransition>


      </div>
    </div>
  )
}

function TabContent(props){

  useEffect(
    ()=>{
      props.스위치변경(true);
    return()=>{},[props.tap] }
    
  )



  if(props.tap ===0){return <div>0번째</div>
  }else if (props.tap === 1) {
    return <div>1번째</div>
  }
}
;

function Info(props) {
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;