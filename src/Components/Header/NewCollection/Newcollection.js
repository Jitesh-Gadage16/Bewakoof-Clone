import React from 'react'
import NewProduct from './NewProduct';
import { Container, Row, Col } from "reactstrap";


const NewCollection = () => {
    return (
        <div className='Newcolllection'>
            <h4>WHAT'S NEW</h4>
            <Container fluid={true} className='py-3'>
              <Row md={2} lg={4} className='d-flex'>
               <Col>
            <NewProduct title='black t-shirt' price='399' sp='199' image='https://images.bewakoof.com/t320/the-chibi-bat-printed-t-shirt-men-s-printed-t-shirts-364770-1624277462.gif'/>
            </Col>
            <Col>
             <NewProduct title='black t-shirt' price='399' sp='199' image='https://images.bewakoof.com/t320/the-chibi-bat-printed-t-shirt-men-s-printed-t-shirts-364770-1624277462.gif'/>
             </Col>
             <Col>
             <NewProduct title='black t-shirt' price='399' sp='199' image='https://images.bewakoof.com/t320/the-chibi-bat-printed-t-shirt-men-s-printed-t-shirts-364770-1624277462.gif'/>
             </Col>
             <Col>
             <NewProduct title='black t-shirt' price='399' sp='199' image='https://images.bewakoof.com/t320/the-chibi-bat-printed-t-shirt-men-s-printed-t-shirts-364770-1624277462.gif'/>
             </Col>
             </Row>
             </Container>
            <div className='view-collection'>
                <a href='/'>VIEW ALL</a>
            </div>
        </div>
    )
}

export default NewCollection;