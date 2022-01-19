import React from "react";
import { Button, Table } from 'react-bootstrap';
import { connect } from "react-redux";
import './App.css';

function Cart(props) {

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>구매하기</th>
                    </tr>
                </thead>
                <tbody>
                    {props.state.map((a,i)=>{return(
                     <tr key ={i}>
                     <td>{props.state[i].id}</td>
                     <td>{props.state[i].name}</td>
                     <td>{props.state[i].quan}</td>
                     <td><Button onClick={()=>{props.dispatch({type :'수량증가'})}}>+</Button>
                        <Button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</Button>
                     </td>
                 </tr>  
                    )

                    })}
                        
                </tbody>
            </Table>
            { props.alertState ===true
            ?            (<div className="my-alret2">
                <p>지금 구매하시면 할인들어갑니다</p>
                <button onClick={()=>{props.dispatch({type:'닫기'})}}>닫기</button>
            </div>)
            : null} 


        </div>


    );
};

function 표내용 (props){
    return(
        <tr>
                        <td>{props.state.id}</td>
                        <td>{props.state.name}</td>
                        <td>{props.state.quan}</td>
                        <td><Button onClick={()=>{props.state.dispatch({type :'수량증가'})}}/></td>
                    </tr>  
    )
}

function state를props화(state){
  return {
    state : state.reducer,
    alertState : state.reducer2
  }
}

export default connect(state를props화)(Cart);


// export default Cart;