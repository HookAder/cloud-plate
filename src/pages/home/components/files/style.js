import styled from 'styled-components';


export const FilesWrapper = styled.div`
  margin-top: .1rem;
  width: 100%;
  background: #fff;
`;

export const FilesList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilesItem = styled.li`
  margin-top: .2rem;
  list-style: none;
  width: 48%;
  height: 6rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  svg {
    font-size: 3rem;
  }
`;