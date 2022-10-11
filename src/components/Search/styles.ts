import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 48px;

  margin: 0 auto;
  margin-bottom: 7.5rem;
  padding: 4rem 1.6rem;

  border: 1px solid #DDDDDD;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div > input {
    width: 320px;
    height: 48px;

    padding: 0 1.6rem;
    margin-right: 1.6rem;

    border: 1px solid #DDDDDD;
    border-radius: 6px;

    outline: none;
  }

  div > button {
    width: 90px;
    height: 48px;

    font-weight: 500;

    border: 1px solid #DDDDDD;
    border-radius: 6px;

    &:hover {
      background: #DDDDDD;
    }
  }

  select {
    display: inline-block;
    width: 320px;
    height: 48px;
    
    border: 1px solid #DDDDDD;
    border-radius: 6px;

    font-size: 1.4rem;
    font-weight: 500;
  }
`