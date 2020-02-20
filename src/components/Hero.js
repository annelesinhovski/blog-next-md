import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import {Container, Nav} from 'react-bootstrap'

const Herotopo = styled.div`
  padding: 70px 0 0;
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

  .nav {
    .nav-item {
      a {
        font-weight: bold;
        border-bottom: 3px solid #d5d5d5;
        &:hover {
          border-bottom: 3px solid #007bff;
        }
      }
    }
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
          <div>

            <Nav className="justify-content-center" activeKey="/home">
              {props.topLinks && props.topLinks.length > 0 && (
                props.topLinks.map((link, i) => {
                  return link.href.indexOf('http') === -1 ? (
                    
                    <Nav.Item>
                      <Nav.Link href={link.href} key={i}>
                          {link.text}
                      </Nav.Link>
                    </Nav.Item>
                  ) : (
                    <Nav.Item>
                      <Nav.Link href={link.href} key={i}>
                          {link.text}
                      </Nav.Link>
                    </Nav.Item>
                  )
                })
              )}
            </Nav>
            
          </div>
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
