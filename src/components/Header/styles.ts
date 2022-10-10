import styled from "styled-components";

export const Container = styled.header`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem;
  margin-bottom: 7.5rem;

  button {
    font-size: 1.4rem;
    font-weight: 600;

    padding: 1.6rem;

    border-radius: 6px;

    background: none;
    outline: none;
    border: none;

    &:hover {
      background: #DDDDDD;
    }
  }

  border-bottom: 1px solid #DDDDDD;
`
