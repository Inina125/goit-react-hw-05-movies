import styled from 'styled-components';

const Cont = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  margin: 10px;
`;

const Photo = styled.img`
  width: 100px;
  max-height: 200px;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const Name = styled.p`
  font-weight: 500;
`;

const Character = styled.p``;

export { Cont, Item, Photo, Name, Character, InfoCont };
