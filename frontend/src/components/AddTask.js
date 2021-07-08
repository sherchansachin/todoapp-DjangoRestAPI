import React from 'react'
import { Container} from 'react-bootstrap';

const AddTask = () => {
    return ( 
        <Container>
            <div className='py-5 text-center tasks'>
                <h3>What do I need to do today?</h3>
                <button className='btn btn-primary mt-4'>Add a New Task</button>
            </div>
        </Container>
    )
}


export default AddTask