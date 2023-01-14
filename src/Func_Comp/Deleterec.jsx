import React from 'react';
import {Form,Col,Button} from 'react-bootstrap'

//create react functional component

const Deleterec = () => { 



     async function delrec() {

        let id = parseInt(document.getElementById("Idtodel").value);
        let reason=document.getElementById("formreason").value;

        try{
      let response=await fetch(`https://localhost:44380/api/Default/deleterec/${id}` ,{
            method: 'DELETE',
            body: JSON.stringify(reason),
            headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            })})

            let data=await response.json();

          if(data===200){
            alert('delete commited')

          }
          else{
            alert('No delete was commited')
          }
        }
        catch{
          alert('No delete was commited')
        }


    }

    const handleSubmit= (e) => {
      e.preventDefault();
      delrec();
  }


    //write the html code inside the return function as form from bootstrap react


    return ( 
        
        <div onSubmit={handleSubmit} className="form-container" style={{height:"70%",marginTop:"140px"}}> 
        <Form style={{width:"50%",margin:"auto",marginTop:"50px", border:"2px solid lightgrey",padding:"15px", borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <Form.Group as={Col} className="mb-3" controlId="Idtodel">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Recipe Id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formreason">
                
                <Form.Label> Reason </Form.Label>
                <Form.Control type="text" placeholder="Enter Delete Reason" />
            </Form.Group>

           
        
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            </Form>

        </div>
        
    ) 
}







export default Deleterec;

