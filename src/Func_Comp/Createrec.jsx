import { Card,Row,Col,Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

// create react functional component


const CreateRec = () => {


      
    const [ingerdients, SetIngerdients] = useState([]);


    useEffect(  () => { 

      fetchdata();


    }, []);

//solve the problem of the alert that not appears always

async function fetchdata(){

  await fetch("https://localhost:44380/api/Default/ingerd" ,{
      method: 'GET',
      headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      })})
  .then( (response) => {
      return response.json();
  }).then( (data) => {
    
    
      SetIngerdients(data);
  } 
  )
} 
    


        
   async function change1() { 
 
        let ingerdientschecked = [];
        ingerdients.forEach(element => {
            if (element.checked === true) {
                ingerdientschecked.push({ id: element.id });
            }
        });

        let recipename = document.getElementById("formBasicName").value;
        let recipeimg = document.getElementById("formBasicImg").value;
        let recipecooktime = document.getElementById("formBasicCooktime").value;
        let recipecookmethod = document.getElementById("formBasicCookmethod").value;
        const newrecipe = {
            name: recipename,
            imageurl: recipeimg,
            Time: recipecooktime,
            cookingmethod: recipecookmethod,
            ingerdients: ingerdientschecked
        };


        let response=await fetch('https://localhost:44380/api/Default/recipe', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newrecipe)
        })
        
      let data=await response.json();
      if(data===200){
        alert('Recipe was added!')
      }
      else{
        alert('Recipe was not added!')
      }


       
      }
      

        


const handleSubmit = (e) => {
  e.preventDefault();
  change1();

}

        


    function handleCheckboxChange(id) {
    SetIngerdients(
      ingerdients.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            checked: !card.checked,
          };
        }
        return card;
      })
    );
  }

 
      

    return (
   
        <>
     

          <Row className="mx-auto" style={{marginTop:"30px", marginBottom:"50px"}}>
            {ingerdients.map((card) => (
              <Col key={card.id} md={6} lg={2}>
                <Card bg='info' style={{marginBottom:"10px"}}>
                       
                  <Card.Body style={{height:"300px"}}>
                  <Form.Check
                  type="checkbox"
                  checked={card.checked}
                  onChange={() => handleCheckboxChange(card.id)}
                  label="Pick thie Ingerdient"
                  style={{paddingLeft:"12px"}}
                />
                 <Card.Img variant="top" src={card.imageurl} style={{height:'200px'}}  />

                    <Card.Title>{card.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>        
              
          <Form style={{ bottom:'20px'}} onSubmit={handleSubmit}  >
      <Form.Group className="mb-3" controlId="formBasicName" >
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Recipe Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImg">
        <Form.Label>Enter Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCooktime">
        <Form.Label>Enter Cooking Time</Form.Label>
        <Form.Control type="text" placeholder="Cooking Time" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCookmethod">
        <Form.Label>Enter Cooking Method</Form.Label>
        <Form.Control type="text" placeholder="Cooking Method" />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Add Recipe
      </Button>
    </Form>
        </>
      );
    }
    ;

    export default CreateRec;


    


