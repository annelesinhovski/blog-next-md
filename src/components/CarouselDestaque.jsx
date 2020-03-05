import React from 'react';
import styled from 'styled-components';
import {Carousel, Button} from 'react-bootstrap'
import summaryJson from '../../content/summary.json'
import { makeUrl, filterPosts } from '../utils/content'

const CarouselRecentes = styled.div`
  width: 100%;
  .carousel-item {
    position: relative;
      img {
          width: 100%;
      }
      &:before {
        content: "";
        position: absolute;
        opacity: 0.5;
        background: #000;
        width: 100%;
        height: 100%;
    }
  }
`


function CarouselDestaque() {
    // Chamando o json com todas as infos dos posts
    const blogposts = filterPosts(summaryJson)
    // Seleciona os 3 posts mais recentes
    const recentPosts = blogposts.slice(0, 3)

    return (
        <CarouselRecentes>
            <Carousel>
                {recentPosts.map((article, i) => {
                const href = makeUrl(article)
                    return (
                        <Carousel.Item>
                            <img src={article.img} alt={article.title} />
                            <Carousel.Caption>
                            <h3>{article.title}</h3>
                            <p>{article.preview}</p>
                            <Button variant="primary" href={href}>Ver mais</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </CarouselRecentes>
    )
}

export { CarouselDestaque };
