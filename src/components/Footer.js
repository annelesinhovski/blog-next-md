import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Container} from 'react-bootstrap'

const Rodape = styled.footer`
  padding: 50px 0 30px;
  margin: 100px 0 0;
  display: block;
  width: 100%;
  background: #d5d5d5;

  p {
    text-align: center;
  }

`;

function Footer(props) {
  const now = new Date()

  return (
    <Rodape>
      <Container className="center">
        <p>
          <span>&copy; </span>
          <span>{now.getFullYear()} </span>
          <span>{props.copyright}</span>
        </p>
      </Container>
    </Rodape>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}

export default Footer
