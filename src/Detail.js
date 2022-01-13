import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;,
  color : ${props => props.색상}
`

function Detail(props) {
  let [매진스위치, 매진스위치변경] = useState(false);
  useEffect(() => {
    let 타이머 = setTimeout(()=>{매진스위치변경(true)},3000);
  return ()=>{clearTimeout(타이머)}},[])
    
  let history = useHistory();
  let { id } = useParams();

  let clikedId = props.shoes.find(function (product) {
    return product.id == id;
  });
  let [인풋,인풋값] = useState('');


  return (
    <div className="container" key={clikedId.id} >
      <박스>
        <제목 className='red'>상세페이지</제목>
      </박스>
      {인풋}
      <input onChange={(e)=>{인풋값(e.target.value)}}/>
      {매진스위치 === false ? <div className='my-alret2'>
        <p>곧 매진</p>
      </div> : null}

      <div className="row">
        <div className="col-md-6">
          <img src={clikedId.src} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{clikedId.title}</h4>
          <p>{clikedId.content}</p>
          <p>{clikedId.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { history.goBack(); }}>이전페이지</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;