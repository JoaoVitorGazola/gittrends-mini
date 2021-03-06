import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState } from "react";

export default function Formulario({setEstrelas}) {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/", {method: 'POST',
        headers: { 'Content-Type': 'application/json' }, body:JSON.stringify({tokenAuth: inputs.tokenAuth, repositoryId: inputs.repositoryId})})
      .then(res => res.json())
      .then(
        (result) => {
          setEstrelas(result.repository._stargazers.edges
          );
        },
        (error) => {
            alert(error)
        }
      )
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      
    return (
        <Card>
            <Card.Body>
                <Card.Title>Preencha os campos a seguir</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="tokenAuth">
                        <Form.Label>Token GitHub</Form.Label>
                        <Form.Control type="text" placeholder="Token GitHub" name='tokenAuth'
                            value={inputs.tokenAuth || ""}
                            onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="repositoryId">
                        <Form.Label>ID do repositório</Form.Label>
                        <Form.Control type="string" placeholder="ID do repositório" name='repositoryId' 
                            value={inputs.repositoryId || ""}
                            onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
