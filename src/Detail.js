import React,{useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Detail(props){

let history = useHistory();
let { id  } = useParams();

let clikedId = props.shoes.find(function(product){
  return product.id == id;
});


    return(
      <div className="container" key={clikedId.id} >
        <div className="row">
          <div className="col-md-6">
            <img src={clikedId.src} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{clikedId.title}</h4>
            <p>{clikedId.content}</p>
            <p>{clikedId.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{ history.goBack();}}>이전페이지</button> 
          </div>
        </div>
  </div> 
    )
  }
  
  export default Detail;