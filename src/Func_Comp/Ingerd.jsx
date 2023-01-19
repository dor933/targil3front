import React from "react";
import { Form, Button,Col } from "react-bootstrap";

// create react functional component





const Ingerd = () => { 




    async function addingerd(){

        let ingerdname = document.getElementById("formBasicName").value;
        let ingerdimage = document.getElementById("formBasicImage").value;
        let ingerdcalories = document.getElementById("formBasicCalories").value;
        const newingerd = { 
            name: ingerdname,
            imageurl: ingerdimage,
            calories: ingerdcalories
        }

        let response=await fetch("https://localhost:44372/api/Default/ingerd" ,{
            method: 'POST',
            body: JSON.stringify(newingerd),
            headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            })})

            let data=await response.json();
            if(data===200){
                alert('Ingerdient was added!')
            }
            else{
                alert('Ingerdient was not added!');
            }

          

    }

    const handleSubmit= (e) => {
        e.preventDefault();
        addingerd();
    }




    return (
        
        <div className="form-container" style={{height:"70%",marginTop:"140px"}}> 
        <Form onSubmit={(e)=> handleSubmit(e)} style={{width:"50%",margin:"auto",marginTop:"50px", border:"2px solid lightgrey",padding:"15px", borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Ingerdient Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control type="text" placeholder="Enter Image Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCalories">
                <Form.Label> Calories</Form.Label>
                <Form.Control type="text" placeholder="Enter Ingerdient Calories" />
            </Form.Group>
           
        
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            </Form>

        </div>
       
    )
}

export default Ingerd;
