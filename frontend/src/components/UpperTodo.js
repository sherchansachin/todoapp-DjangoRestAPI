import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import check from '../icon/todo.svg'

const UpperTodo = () => {
    return (
        <section className = 'section-1'>
            <Container fluid ={true} className="p-0">
                <Row noGutters>
                    <Col lg={6} md={12} xs={12}>
                    <div className = 'top'>
                        <h1>My To-dos</h1>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className = 'u-img'>
                        <img src={check} alt='sticky notes'/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default UpperTodo