import styled from 'styled-components';

export const Container = styled.div`
  width:80vw;
  display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;


export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:#002060;
  padding: 2px;
  ativaCor{
    background:red;
  }
`;
export const sticky = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.9
  );
  `;
export const StyledLi = styled.li`
font-size:20px;
margin: 10px;
  float: left;
  padding: 14px 10px;
  a{
    list-style: none;
 text-decoration: none;
 color: #ffffb2;
  
  &:hover {
  color:#fff;
}
  }
`;


export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  justify-content:center;
  padding: 8px 10px;


`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color:#002060;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius:0.5rem;
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`

margin: 16px;
  padding: 2px 18px;
  text-align: center;
  justify-content:center;
  display: inline-block;
  
  &:hover {
    background-color: #002060;
    border-radius:0.5rem;
  }
  &:hover ${DropDownContent} {
    display: block;
    
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  &:hover {
    color:#fff;
  }
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #002060;
    color:#fff;
    border-radius:0.5rem;
  }
`;