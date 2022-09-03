import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineFolder } from 'react-icons/ai';

import featuredProjects from '../../mock/featured';

const Featured = () => {
  const data = '';

  return (
    <Container>
      <div className="projects-header">
        <p>Other small noteworthy projects &darr;</p>
      </div>
      <Row>
        {featuredProjects.map((node, id) => (
          <Col key={id} lg={4} sm={6} xs={12} className="d-flex">
            <Card className="mb-4 projects">
              <Card.Body>
                <Row style={{ fontSize: '1.125rem' }} className="post-meta">
                  <Col>
                    <AiOutlineFolder style={{ fontSize: '2rem' }} className="folder" />
                  </Col>
                  <Col className="text-right">
                    {node.github && (
                      <Card.Link href={node.github}>
                        <FiGithub />
                      </Card.Link>
                    )}
                    {node.demo && (
                      <Card.Link href={node.demo}>
                        <BiLinkExternal />
                      </Card.Link>
                    )}
                  </Col>
                </Row>
                <Card.Title style={{ fontSize: '1.5rem', paddingBlock: '7px', fontWeight: 'bold' }}>
                  {node.name}
                </Card.Title>
                <Card.Text>{node.excerpt}</Card.Text>
                <div
                  className="badges"
                  style={{
                    fontSize: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  {node.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      style={{
                        padding: '7px',
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Featured;
