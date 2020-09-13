import React,{useState} from 'react';
import { Navbar, Nav,Form,Button, ListGroup, Jumbotron,Container,Card,CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
//import noImage from './no_image.jpeg'




class App extends React.Component {
  state = {
    itemList : JSON.parse(sessionStorage.getItem('allItems')) || [],
  }

  Home =() =>{
    return(
      <div style={{margin: 'auto', width: '70%',border: 3,padding: 10}}>
        <Jumbotron>
          <Container>
        <h2>Welcome!! you can register <Link to="#register">here</Link> or go to purchase our <Link to="/products">products</Link></h2>
        
        
        </Container>
        </Jumbotron>
        <h1><Link to="/ProductForm">add products</Link></h1>
      </div>
    );
  }

  
 
  ProductsForm = () =>{
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [img,setImg] = useState();
    const [item, setItem] = useState({
      name: "",
      price: 0,
      description: "",
      img:"",
    });
    
    //const [itemList,setItemList] = useState([]);
    const [display, setDisplay] = useState(false);
    console.log(item);
    console.log(this.state);
    return(
      <div style={{margin: 'auto', width: '50%',border: 3,padding: 10}}>
        <div>
          <Form>
            <h1>Adding product form</h1>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="product name" value={name} onChange={(event)=>{
                  setName(event.target.value);}}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Source Image</Form.Label>
              <Form.Control type="text"  placeholder="Image URL" value={img} onChange={(event)=>{
                  setImg(event.target.value);}}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" pattern="[0-9]*" placeholder="product price" value={price} onChange={(event)=>{
                  setPrice((event.target.validity.valid) ? 
                  event.target.value : price);        }}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="product description" value={description} onChange={(event)=>{
                  setDescription(event.target.value);        }}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick = {(event)=>{
              event.preventDefault();
              setItem({
                name : name,
                price : price,
                description: description,
                img: img,
              });
              //console.log(item);
              setDisplay(true) ;
              setName("");
              setPrice(0);
              setDescription("");
              setImg("");
            }}>
              Add product
            </Button>
          </Form>
        </div>
        <br></br>
        
          {display ? (
          <div>
          <ListGroup horizontal>
            <ListGroup.Item>Product Name: {item.name}</ListGroup.Item>
            <ListGroup.Item><img src={item.img} alt="product"/></ListGroup.Item>
            <ListGroup.Item>Product Price: {item.price}</ListGroup.Item>
            <ListGroup.Item>Product Description: {item.description}</ListGroup.Item>
          </ListGroup>  
          <Button onClick={(event)=>{
            event.preventDefault();
            this.setState({itemList :[...this.state.itemList,...[item]]},() => {
              sessionStorage.setItem('allItems', JSON.stringify(this.state.itemList))
            });
            //this.setState({itemList: [...this.itemList,...itemList]});
            }}>add to store</Button></div>) : (<br></br>)}
        
      </div>
    );
  }

  DisplayProducts= () =>{
    console.log(this.state);
    let len = this.state.itemList.length;
    console.log(len);
    let showItems= false;
    if(len ===0){
       showItems = false;
    }
    else{
       showItems = true;
    }
    return(
      <div>
        {showItems ?
        (<div>
        <CardDeck>
            {this.state.itemList.map((item,index)=>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description} with a price of {item.price} DT
              </Card.Text>
            </Card.Body>
          </Card>
            )}
        
        </CardDeck>
        <Button variant="dark" onClick={(event)=>{
          sessionStorage.clear();
        }}>Remove all products</Button ></div>) : (<div>
          <Jumbotron>
            <Container>
          <h2>You have no products you can <Link to="/products">add products</Link> here</h2>
          </Container>
        </Jumbotron></div>)}
      </div>
    );
  }
  render(){
    return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Website</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="#register">Register/login</Nav.Link>
          </Nav>
        </Navbar>
        <header>
          
          <Route path="/" exact component={this.Home}/>
          <Route path="/productForm" component={this.ProductsForm}/>
          <Route path="/products" component={this.DisplayProducts} />
        </header>
      </div>
      </BrowserRouter>

    );
  }
}
export default App;
