import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import {Card, Col } from 'react-bootstrap'

const Cardpost = styled.div`
  margin: 15px 0;
  a {
    &:hover {
      text-decoration: none;
    }
    .card-title {
      color: #000;
      font-weight: bold;
    }
    .card-text {
      color: #131313;
      p {
        a {
          color: #131313;
          font-weight: bold;
          display: block;
          margin: 20px 0; 
        }
      }
      small {
        text-transform: uppercase;
        font-size: 12px;
      }
    }
  }
`;

function PageLink(props) {
  return (
    <Link href={`post?fullUrl=${props.href}`} as={props.href}>
      <a>
        { props.children }
      </a>
    </Link>
  )
}

function PagePreview(props) {
  return (
    <Col>
      <Cardpost>
      <PageLink href={props.href} className="f3">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ props.img } />
            <Card.Body>
              <Card.Title>{ props.title }</Card.Title>
              <Card.Text>
                {props.preview && (
                  <p>
                    { props.preview }
                    <PageLink href={props.href}>
                      <span> Leia mais &rsaquo;</span>
                    </PageLink>
                  </p>
                )}
                {props.date && (
                  <small>
                    <time key={ new Date(props.date).toISOString() }>
                      { props.date }
                    </time>
                  </small>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </PageLink>
      </Cardpost>
    </Col>
  )
}

PagePreview.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  preview: PropTypes.string,
  img: PropTypes.string,
  date: PropTypes.string,
}

export default PagePreview
