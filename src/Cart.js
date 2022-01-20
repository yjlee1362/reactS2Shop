import React from "react";
import { Button, Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from "react-redux";
import './App.css';

function Cart(props) {

    let state = useSelector((state)=>{return state})
    console.log(state.reducer);
    const stateReducer = state.reducer;
    let dispatch = useDispatch();

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>구매수량</th>
                    </tr>
                </thead>
                <tbody>
                    {stateReducer.map((a,i)=>{return(
                     <tr key ={i}>
                     <td>{stateReducer[i].id}</td>
                     <td>{stateReducer[i].name}</td>
                     <td>{stateReducer[i].quan}</td>
                     <td><Button onClick={()=>{dispatch({type :'수량증가', 데이터:i})}}>+</Button>
                        <Button onClick={()=>{dispatch({type : '수량감소', 데이터:i})}}>-</Button>
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

export default Cart;

// function state를props화(state){
//   return {
//     state : state.reducer,
//     alertState : state.reducer2
//   }
// }

// export default connect(state를props화)(Cart);


// export default Cart;