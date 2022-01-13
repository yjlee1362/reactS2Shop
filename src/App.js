import logo from './logo.svg';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import dett from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch, useHistory } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(dett);
  

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

  function 기본정렬() {
    shoes변경(dett);
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">PC샵</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link}to="/">Home</Nav.Link>
              <Nav.Link as ={Link}to="/detail">Detail</Nav.Link>
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
          <div className='jumbotron'>
            안녕친구들 <br />
            일단 이런거 해봤어<br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='buttonIn'>
              <Button variant="dark">확인</Button>{' '}
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              {shoes.map((a, i) => { return (<상품 key={i} shoes={shoes[i]} />) })}
            </div>
            <Button variant="dark" onClick={낮은가격순정렬}>낮은 가격순 </Button>{' '}
            <Button variant="dark" onClick={높은가격순정렬}>높은 가격순</Button>{' '}
            <Button variant="dark" onClick={기본정렬}>기본정렬</Button>{' '}
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}  />
        </Route>
        {/* <Route path="/어떤경로" component={컴포넌트이름}></Route> */}
        <Route path="/:id">
          <div> 아무거나 적었을떄 이거 </div>
        </Route>
      </Switch>
    </div>

  );
}
function 상품(props) {const a = useHistory()
  return (
    <div className="col-md-4" >
      <img src={props.shoes.src}  width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      <Button variant="primary"  onClick={()=>{ a.push(`/detail/${props.shoes.id}`)}} >자세히보기</Button>{' '}
    </div>

  );
}
export default App;
