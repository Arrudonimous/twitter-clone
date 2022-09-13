import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background-color: black;
  flex-direction: row;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth * 2}px;
  border-bottom-color: #1e1e1e;
`;

export const Item = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 25px;
  height: 25px;
`;
