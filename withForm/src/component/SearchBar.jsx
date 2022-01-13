import {useState} from "react"
import{Container, Col, Row, FormControl, Button, Form} from "react-bootstrap"
import{Link} from 'react-router-dom'
const SearchBar = ({handleSearch,search}) => {


    return(
        <div className='d-flex'>

           <Form className="d-flex m-3 w-100 m-auto pt-3" style={{maxWidth:'400px'}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value ={search}
                    onChange={(e)=> (handleSearch(e.target.value))}
                    />
                    <Button variant="outline-success" className='bg-white'>Search</Button>
            </Form>
                  <Link to='/registration'>
                      <span className='h-3 text-white'>Become a member</span>
                 </Link>
          </div>
    )
}

export default SearchBar;