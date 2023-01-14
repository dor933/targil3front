
import React, { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function IndividualIntervalsExample(props) {

    const [recipes, setRecipes] = React.useState([]);
    const [activeKey, setActiveKey] = useState(null);



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
    <Carousel onSlide={()=> setActiveKey(null)} style={{height:"80%",width:"50%",margin:"auto"}}>

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
                Calories: {activeKey.calories}
            </Card.Text>
            <Card.Text>
              Time:{activeKey.Time}
            </Card.Text>
            <Card.Text>
              Cooking Method:{activeKey.cookingmethod}

            </Card.Text>
            <Button onClick={() => setActiveKey(null)}>
                Hide Details
            </Button>
        </Card.Body>
    </Card>)}
    </>


     
  );
}

export default IndividualIntervalsExample;