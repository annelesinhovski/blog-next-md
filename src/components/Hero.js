import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import {Container} from 'react-bootstrap'

const Herotopo = styled.div`
  padding: 70px 0 50px;
  margin: 0 0 50px;
  display: block;
  width: 100%;
  background: #d5d5d5;

  h1 {
    text-transform: uppercase;
    font-size: 32px;
  }

  h4 {
    font-size: 20px;
  }

`;

function Hero(props) {
  return (
    <Herotopo>
      <Container>
        <div>
          {props.heroImg}
          <h1>
            <Link href="/">
              <a className="white no-underline" href="/">
                {props.heroTitle}
              </a>
            </Link>
          </h1>
          <p>
            {props.subtitle}
          </p>
        </div>
      </Container>
    </Herotopo>
  )
}

Hero.propTypes = {
  backgroundClass: PropTypes.string,
  topLinks: PropTypes.array,
  heroImg: PropTypes.string,
  heroTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  topLinks: [],
  heroTitle: '',
  subtitle: '',
}

export default Hero
