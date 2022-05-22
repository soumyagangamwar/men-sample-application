import React from 'react';
import { Link } from 'react-router-dom';
import "./MyNotes.css";
import MainScreen from '../../components/MainScreen'
import { Button, Card, Badge, Accordion } from 'react-bootstrap';
import data from '../../data/notes';

const MyNotes = () => {
  const deleteHanler = (id) => {
    if (window.prompt(`Are you sure want to delete ${id}`)) {

    }
  }
  return (
    <div>
      <MainScreen title="Welcome to MyNotes">
        <Link to="/createNote">
          <Button size="lg">
            Create My Note
          </Button>
        </Link>

        {
          data.map(card => (
            <Accordion key={card._id}>
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span style={{
                    color: "black",
                    flex: 1,
                    alignSelf: "center"
                  }}>
                    {/* <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    > */}
                    
                      {card.title}
                    {/* </Accordion.Toggle> */}
                  </span>
                  <div>
                    <Button href={`note/${card._id}`}>
                      Edit
                    </Button>
                    <Button variant="danger"
                      className="mx-2" onClick={() => deleteHanler(card._id)}>
                      Delete

                    </Button>
                  </div>
                </Card.Header>
                {/* <Accordion.Collapse eventKey="0"> */}
                  <Card.Body>
                    <h4>
                      <Badge bg="success" variant="success">
                        Catogory-{card.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {card.content}
                      </p>
                      <footer className="blockquote-footer">
                        --Created On Date:
                      </footer>
                    </blockquote>
                  </Card.Body>
                {/* </Accordion.Collapse> */}
              </Card>
            </Accordion>

          ))
        }


      </MainScreen>
    </div>
  )
}

export default MyNotes;