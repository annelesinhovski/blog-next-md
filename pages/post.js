import React from 'react'
import { withRouter } from 'next/router'
import Page from '../src/components/Page'
import styled from 'styled-components'
import { filterPosts } from '../src/utils/content'

import CONFIG from '../content/index.json'
import summaryJson from '../content/summary.json'

import {Container, Button} from 'react-bootstrap'


const Navposts = styled.div`
  display: block;
  margin: 50px 0;
  width: 100%;

  .btn-anterior {
    
  }

  .btn-proximo {
    float: right;
  }

`;


function Index(props) {
  const pageJson = props.pageJson;

  return (
    <div>
      <style jsx global>{`
        .content a {
          color: #0365A5;
          text-decoration: none;
          border-bottom: 1px solid #DFDFDF;
          transition: all 300ms ease;
        }

        a:hover, a:focus {
          border-bottom-color: currentColor;
        }

        code {
          background-color: #EEE;
          line-height: 1;
          border-radius:2px;
          padding: 1px;
        }
        code:not(.hljs) {
          border: 1px solid #DDD;
        }
      `}</style>
      <Page
        siteTitle={`${CONFIG.siteTitle} - ${pageJson && pageJson.title}`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body(pageJson)}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props = {}) {
  
  // Chamando o json com todas as infos dos posts
  const blogposts = filterPosts(summaryJson);
  
  // Filtrando só a URL dos posts
  const linksPostlist = blogposts.map(( article ) => {
    const urlBase = `${article.base.split('.json').join('')}`;
    const diretorioPost = `${article.dir.split('content').join('')}`;
    return diretorioPost + "/" + urlBase
  });

  // Mapeando a página atual
  const blogBases = blogposts.map(a => a.base);
  const atual = blogBases.indexOf(props.base);

  // Obtendo a URL do Anterior/Próximo
  const next = linksPostlist[atual + 1];
  const prev = linksPostlist[atual - 1];

  // Definindo o redirect do Anterior/Próximo
  function prevPost() {
    window.location.href = window.location.search + prev;
  }
  function nextPost() {
    window.location.href = window.location.search + next;
  }


  return (
    <Container>
      <figure>
        <img src={props.img} alt={props.title} />
      </figure>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.bodyHtml }}></div>

      <Navposts>
        <Button className="btn-anterior" variant="primary" onClick={prevPost}>&lsaquo; Post Anterior</Button>
        <Button className="btn-proximo" variant="primary" onClick={nextPost}>Próximo Post &rsaquo;</Button>
      </Navposts>
    
    </Container>
  )
}

Index.getInitialProps = async function (req) {
  if (req.pathname === '/post') {
    return import(`../content${
      req.query.filePath ? req.query.filePath
        .replace('content', '')
        .replace('.json', '') : req.query.fullUrl
    }.json`)
      .then((d) => {
        return {
          pageJson: d.default
        }
      }).catch((e) => {
        console.log(e)
      })
  }
  return {}
}

export default withRouter(Index)
