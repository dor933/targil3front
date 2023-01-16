
import React, { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { Card,Row,Col,Button } from 'react-bootstrap';


function IndividualIntervalsExample(props) {

    const [recipes, setRecipes] = React.useState([]);
    const [activeKey, setActiveKey] = useState(null);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {

    fetch("https://localhost:44380/api/Default" ,{
      method: 'GET',
      headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      })})
    .then( (response) => {
      return response.json();
    }).then( (data) => {

      console.log(data);
      setRecipes(data);

    } 
  )}, []);

  return (
    <>
    <Carousel onSlide={()=> {setActiveKey(null); setShow(false)}} style={{height:"80%",width:"50%",margin:"auto"}}>

      {recipes.map((recipe) => {
        return <Carousel.Item interval={10000}>
        <img style={{width:"50%", height:"50vh",borderRadius:"50%",margin:"auto",marginTop:"50px"}}
          className="d-block w-100"
          src={recipe.imageurl}
          alt={recipe.name}
        />

<Button  variant="primary" style={{marginTop:"10px"}} onClick={() => setActiveKey(recipe)}>
View Details
</Button>
       
 
      </Carousel.Item>
      })}
          
    </Carousel>
  
    {activeKey !== null && (<Card style={{border:"2px solid lightgrey",borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <Card.Title>
            Name: {activeKey.name}
        </Card.Title>
        <Card.Body>
        <Card.Text>
                Id: {activeKey.id}
            </Card.Text>
            <Card.Text>
                Calories: {activeKey.calories}
            </Card.Text>
            <Card.Text>
              Time:{activeKey.Time}
            </Card.Text>
            <Card.Text>
              Cooking Method:{activeKey.cookingmethod}
            </Card.Text>
            <Card.Text>
            <Button variant="primary" onClick={handleShow}>
         Show Ingerdients
      </Button>
      </Card.Text>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{margin:"auto"}}>Recipe Ingerdients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className="mx-auto" style={{marginTop:"30px", marginBottom:"50px"}}>
            {activeKey.ingerdients.map((card) => (
              <Col key={card.id} md={6}>
                <Card bg='info' style={{marginBottom:"10px",height:"100%", paddingBottom:"10px"}}>
                       
                  <Card.Body style={{height:"100%", width:"100%",margin:"auto"}}>
          
                 <Card.Img variant="top" src={card.imageurl} style={{height:'80%',width:"100%", margin:"auto"}}  />

                <Card.Text style={{textAlign:"center",height:"20%"}}>
                {card.name} <br/>
                Calories:{card.calories}

                </Card.Text>
                

                    {/* <Card.Title>{card.name}</Card.Title> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>        


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{margin:"auto"}}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
            <Button variant='danger' onClick={() => setActiveKey(null)} style={{marginTop:"30px"}}>
                Hide Details
            </Button>
        </Card.Body>
    </Card>)}
    </>


     
  );
}

export default IndividualIntervalsExample;