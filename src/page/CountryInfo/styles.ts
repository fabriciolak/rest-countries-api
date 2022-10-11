import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const CountryGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  
  padding: 1rem;
  border: 1px solid #DDDDDD;

  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    
    padding: 1rem;
    
    border: 1px solid #DDDDDD;
    border-radius: 6px;

    img {
      width: auto;
      height: 320px;
      border-radius: 6px;
    }
  }


  div:nth-child(2) {
    ul {
      list-style: none;

      li {
        font-size: 1.6rem;
        padding: 1rem;

        &:nth-child(odd) {
          background: #EEE;
        }

        &:last-child {
          display: flex;
        }

        span {
          font-weight: bold;
        }
      }
    }
  }
`