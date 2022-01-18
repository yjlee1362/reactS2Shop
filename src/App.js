import logo from './logo.svg';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import React, { useContext, useState } from 'react';
import dett from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';

import { Link, Route, Switch, useHistory } from 'react-router-dom';


let 재고context = React.createContext();



function App() {

  let [shoes, shoes변경] = useState(dett);
  let [재고,재고변경] = useState([10,11,12]);
  let [jumbotron,jumbotronChange] = useState(true);

  function 낮은가격순정렬() {
    const copyArray = [...shoes];
    const changedArray = copyArray.sort(function (a, b) {
      return a.price - b.price
    });
    shoes변경(changedArray);
  };

  function 높은가격순정렬() {
    const copyArray = [...shoes];
    const changedArray = copyArray.sort(function (a, b) {
      return b.price - a.price
    });
    shoes변경(changedArray);
  };

  function 기본정렬() {const copyArray = [...shoes];
    const changedArray = copyArray.sort(function (a, b) {
      return a.id - b.id
    });
    shoes변경(changedArray);
    
  };

  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">이쁜신발샵</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          {jumbotron===true ? <대문 jumbotronChange={jumbotronChange} jumbotron={jumbotron}/> : null}
          <div className='sortButtons'>
              <Button variant="dark" onClick={낮은가격순정렬}>낮은 가격순 </Button>{' '}
              <Button variant="dark" onClick={높은가격순정렬}>높은 가격순</Button>{' '}
              <Button variant="dark" onClick={기본정렬}>기본정렬</Button>{' '}
            </div>
          <div className='container'>

            <재고context.Provider value={재고}>
            
            <div className='row'>
              {shoes.map((a, i) => { return (<상품 key={i} shoes={shoes[i]} />) })}
            </div>
            
            </재고context.Provider>

            <div>
            <Button variant="primary" className='more' onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {if(shoes.length == 3){
                    shoes변경([...shoes, ...result.data])}
                  })
                  .catch(() => {
                    console.log('miss')
                  })
              }} >더보기</Button>{' '}
              
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
        
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        {/* <Route path="/어떤경로" component={컴포넌트이름}></Route> */}
        <Route path="/:id">
          <div> 구현중입니다. </div>
        </Route>
        
      </Switch>
    </div>

  );
}
function 상품(props) {
  const a = useHistory()
  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4" >
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      {재고}
      <Button variant="primary" onClick={() => { a.push(`/detail/${props.shoes.id}`) }} >자세히보기</Button>{' '}
    </div>

  );
};

function 대문(props){
  return(
    <div className='jumbotron'>
            안녕친구들 <br />
            여기는 신발을 파는 곳이야<br />
            아쉽게도 아직은 못팔아<br />
            언젠가는 팔 수 있을꺼야<br />
            그때 다시 만나자구<br />
            다들 밥 잘먹고<br />
            나중에 보자<br />            
          <Button variant="dark" onClick={()=>{props.jumbotronChange(!props.jumbotron)}}>닫기</Button>{' '}
            
          </div>
  )
}


export default App;
