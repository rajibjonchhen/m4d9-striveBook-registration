
import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import scifi from "../src/scifi.json"
import history from "./history.json"
import romance from "./romance.json"
import horror from "./horror.json"
import fantasy from "./fantasy.json"
import MyWarning from './component/WarningSign';
import MyBadges from './component/MyBadges';
import BookList from './component/BookList';
import CommentList from './component/CommentList';
import AddComment from './component/AddComent';
import SearchBar from './component/SearchBar';

const App = () => {

const[asin ,setAsin] = useState()
const[ showComment,setShowComment] = useState(false)
const [category,setCategory]= useState(history)  
  const changeBookAsin = (newAsin,condition) =>{
        setAsin(newAsin)
        setShowComment(true)    
  }
  const [search, setSearch]=useState('')
  const [categoryBtn,setCategoryBtn] = useState([
    {title:'Scifi Books',jsonLink:scifi},
    {title:'Romantic Books',jsonLink:romance},
    {title:'Fantasy Books',jsonLink:fantasy},
    {title:'Horror Books',jsonLink:horror},
    {title:'History Books',jsonLink:history}
  ])

  const changeCategory=(category)=>{
    setCategory(category)
  }

  const handleSearch = (input) => {
    setSearch(input)
  }
    return (
      
      <div className="App">
      {/* <MyWarning warning="This Book is on High Demand" color="info"/> */}
      {/* <MyBadges Mytext="Buy The Latest Book"  color="danger" /> */}
       <Container className="py-2  w-100 m-auto" style={{position:'sticky',top:'0px',zIndex:'2',backgroundColor:'black'}} fluid>

        <h1 className="text-white mb-3" >Select the book categories</h1>
         <SearchBar handleSearch={handleSearch} search={search}/>
       <Row className='text-center'>
        
         {
           categoryBtn.map(btn=>(
         <Col>
             
             <button className="w-100 m-1 mt-3 rounded-lg px-3 py-2 bg-dark text-white " style ={{minWidth:'250px',maxWidth:'250px'}} onClick={(e)=>changeCategory(btn.jsonLink)}>{btn.title}hello</button>
        </Col>
             ))
            }</Row>
            </Container>
     <Container fluid>
       <Row>
         <Col xs={6} sm={8} md={8} lg={showComment?9:12}>
            <BookList books={category} changeBookAsin = {changeBookAsin} search={search}/>
            {/* <SingleBook className="singlBook" changeBookAsin = {this.changeBookAsin} book={scifiBooks[0]}/> */}
         </Col>

         <Col className=" text-center bg-dark" xs={6} sm={4} md={4} lg={3} style={{display:showComment? 'block':'none',position:'fixed', right:'0', height:'100vh',overflow:'scroll'}}>
               
                {
                  category.filter(book=>book.asin.includes(asin)).map((book)=>(
                    <div className='bg-dark  p-0 mt-1' style={{position:'sticky', top:'0',zIndex:'3'}}>
                      <div key={book.asin}  style={{maxWidth:'100px',width:'100%',display:'flex', fontSize:'18px',color:'white'}}>
                    <img className="w-100"src={book.img}/>
                      <span className="w-100" style={{minWidth:'200px',whiteSpace:'wrap'}}>{book.title} </span>
                    </div>
                    
                      <AddComment asin = {asin}/>
                </div>))
            }
            
            <CommentList asin={asin}/>
         </Col>
       </Row>
       </Container> 
      
    </div>
  );
}


export default App;
