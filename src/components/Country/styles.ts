import { Link } from 'react-router-dom'

import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  max-width: 320px;

  padding: 1rem;

  border: 1px solid #DDDDDD;
  border-radius: 6px;

  text-decoration: none;
  color: #000000;

  .image {
    width: 100%;
    height: 158px;

    border: 1px solid #DDDDDD;
    border-radius: 6px;
    padding: 0.5rem;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      object-fit: contain;
    }

  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
  }
  


  ul {
    list-style: none;

    li {
      font-size: 1.6rem;
      font-weight: 600;

      > span {
        font-weight: normal;
      }

      & + li {
        margin-top: 1rem;
      }
    }
  }
`