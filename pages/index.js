import React from 'react'
import Page from '../src/components/Page'
import PagePreview from '../src/components/PagePreview'
import {CarouselDestaque} from '../src/components/CarouselDestaque'
import {FiltroCategoria} from '../src/components/FiltroCategoria'
import { formatDate } from '../src/utils/date'
import { makeUrl, filterPosts } from '../src/utils/content'

import CONFIG from '../content/index.json'
import SUMMARY_JSON from '../content/summary.json'

import {Container, Row} from 'react-bootstrap'

function Index(props) {
  return (
    <div>
      <Page
        siteTitle={`${CONFIG.siteTitle} - Index`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body({ summaryJson: SUMMARY_JSON })}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props) {
  const postList = filterPosts(props.summaryJson)
  return (
    <Container>

      <h1>Carousel with 3 recent posts:</h1>

      <Row>
        <CarouselDestaque />
      </Row>

      <hr />
      <h1>See the full list of posts:</h1>

      <Row>
        {postList.map((article, i) => {
          const href = makeUrl(article)
          const date = formatDate(article.date)
          return (
            <PagePreview
              img={article.img}
              categoria={article.categoria}
              title={article.title}
              preview={article.preview}
              date={date}
              href={href}
              key={i}
              id={article.id}
            />
          )
        })}
      </Row>

      <hr />
      <h1>Or use the category filter/search field:</h1>

      <Row>
        <FiltroCategoria />
      </Row>

    </Container>
  )
}

export default Index
