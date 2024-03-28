import styled from "styled-components";

export const HomeContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  background-color: #f6f6f6;
`;

export const HomeTopWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WidgetWraper = styled.div`
  width: 300px;
  height: 800px;
  position: absolute;
  flex-direction: column;
  display: flex;

  row-gap: 20px;

  top: 190px;
  right: 50px;
`;

export const HomeWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const HomeTableWraper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

export const HomeBanner = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
