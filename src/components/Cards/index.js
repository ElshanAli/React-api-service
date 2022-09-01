import React from 'react';
import "./index.scss";
import {Button, Card, Col, Container, Row } from "react-bootstrap"; 
import { getAllPosts } from '../actions';
import { cardService } from '../../APIs/Services/Cards';

function Cards() {
    const [users, setUsers] = React.useState([])
    // React.useEffect(()=>{
    // getAllPosts(setUsers);
    // },[])

    React.useEffect(()=> {
        cardService.getAllPosts().then(({data:usersData})=>{
           setUsers(usersData);
        });
    }, []);

    const handlePost = () =>{
        const handleInput = {
            userId: 1,
            Id: 2,
            title: "Hello",
            body: "Intro",
        }
        cardService.postNewPost(handleInput)
    }

  return <Container>
    <Row>
        {users.map(({id, title, body})=>(
 <Col md={4} key={id}>
 <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
 <Card.Title>{title}</Card.Title>
 <Card.Text>
  {body}
 </Card.Text>
 <Button onClick={handlePost} variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
 </Col>
        ))}
       
    </Row>
  </Container>;
  
}

export default Cards