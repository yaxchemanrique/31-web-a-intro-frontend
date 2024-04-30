import React, { useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'react-bootstrap'

function Cards() {

    const [button, setButton] = useState(false);
    
    const catImages = [
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
        "https://www.santevet.es/uploads/images/es_ES/razas/gato_callejero_seguro_santevet.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTENrGX5sUFZPwjmJUWfvRxPBIBAhcTac2y-I4iWUkg&s",
        "https://s1.eestatic.com/2020/05/18/como/gatos-mascotas-trucos_490961518_152142875_1706x960.jpg",
    ]

    return (
        <Container>
            <Row>
                {catImages.map((cat, key) => {
                    return(
                    <Col key={key}>
                        <Card style={{ width: '18rem', margin: "1rem" }}>
                            <CardImg variant="bottom" src={cat} />
                            <CardBody>
                                <CardTitle>Card Title</CardTitle>
                                <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </CardText>
                                <Button 
                                    variant={button ? "success":"danger"} 
                                    onClick={() => setButton(!button)}
                                >Go somewhere
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Cards