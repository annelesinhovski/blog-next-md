import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PagePreview from './PagePreview';
import summaryJson from '../../content/summary.json';
import { makeUrl, filterPosts } from '../utils/content';
import { Container, Row, Button } from 'react-bootstrap';
import Select from 'react-select';
import { categorias } from '../constants';

const Filtro = styled.div`
  .search-field {
      width: 50%;
      input {
          width: 100%;
          float: left;
          padding: 6px;
          border-radius: 3px;
          border: solid 1px #dcdcdc;
      }
  }
  .category-dropdown {
      width: 50%;
  }
`;

function FiltroCategoria() {
  const [postCollection, setPostCollection] = useState([]);
  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState('');

  const blogposts = filterPosts(summaryJson);

  useEffect(() => {
    mountCollection();
  }, [filter, value]);

  const mountCollection = () => {
    let posts = [];
    let categorias = filter.map(categoria => {
      return blogposts.filter(p => p.categoria === categoria.value);
    });
    categorias.forEach(categoria => {
      categoria.forEach(c => {
        posts.push(c);
      });
    });
    let postsMount = (posts.length ? posts : blogposts);
    let busca = value.toUpperCase();
    let postsFinal = postsMount.map(post => {
        if (post.title.toUpperCase().includes(busca) || post.preview.toUpperCase().includes(busca)) {
            return post;
        }
    });

    postsFinal = postsFinal.filter(x => x);
    
    setPostCollection(postsFinal);
  };

  const handleChange = event => {
    setFilter(event || []);
  };

  return (
    <Filtro>
      <Container>
        <Row>
            <div className="search-field">
                <input type="text" placeholder="Busque por palavra" onChange={(e) => setValue(e.target.value)}/>
            </div>
            <Select
                isDisabled={false}
                isSearchable={true}
                options={categorias}
                onChange={handleChange}
                placeholder="Busque por categoria"
                className="category-dropdown"
                isMulti
            />
        </Row>
        <Row>
          {postCollection.map((article, i) => {
            const href = makeUrl(article);
            return (
              <PagePreview
                img={article.img}
                categoria={article.categoria}
                title={article.title}
                preview={article.preview}
                href={href}
                key={i}
                id={article.id}
              />
            );
          })}
        </Row>
      </Container>
    </Filtro>
  );
}

export { FiltroCategoria };
