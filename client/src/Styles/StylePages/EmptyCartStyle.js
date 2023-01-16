import styled from "styled-components";
export const EmptyCartStyle = styled.div`
  .emptyCart {
    height: calc(100vh - 13.7rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .emptyCart img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 150px;
  }

  .emptyCart button {
    background: #000;
    color: #fff;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    cursor: pointer;
    margin-top: 2.5rem;
  }
`;
