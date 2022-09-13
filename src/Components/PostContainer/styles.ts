import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: black;
  width: 100%;
  border-bottom-width: 1px;
  padding: 10px 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #232628;
`;

export const PostPhoto = styled.Image`
  width: 53px;
  height: 53px;
  border-radius: 30px;
`;
