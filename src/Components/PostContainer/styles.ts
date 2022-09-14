import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: black;
  width: 100%;
  border-bottom-width: 1px;
  padding: 12px 12px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #232628;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 30px;
`;

export const PostInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  width: 100%;
  height: 16px;
`;

export const PostContent = styled.View`
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  flex: none;
  order: 0;
  padding-top: 4px;
`;

export const PostData = styled.View`
  flex-direction: row;
  margin-top: 4px;
  width: 100%;
  height: 37.35px;
  flex-grow: 0;
  flex: none;
  order: 2px;
  padding-top: 11px;
  padding-left: 1px;
  /* background-color: #232628; */
  justify-content: space-between;
`;

export const PostHeaderName = styled.Text`
  color: #fff;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const PostHeaderUsername = styled.Text`
  color: #cbd0d9;
  padding-left: 5px;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const TimeStamp = styled.Text`
  color: #cbd0d9;
  padding-left: 5px;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Content = styled.Text`
  color: #cbd0d9;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const CommentsContainer = styled.View`
  flex-direction: row;
  flex-grow: 0;
  flex: none;
  order: 0;
`;

export const CommentsNumber = styled.Text`
  color: #555a64;
  font-family: "Arial";
  padding-top: 3px;
  font-size: 16px;
  margin-left: 8px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const RetweetsContainer = styled.View`
  flex-direction: row;
  flex-grow: 0;
  flex: none;
  order: 0;
`;

export const RetweetsNumber = styled.Text`
  color: #555a64;
  padding-top: 3px;
  margin-left: 8px;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  flex-grow: 0;
  flex: none;
  order: 0;
`;

export const LikesNumber = styled.Text`
  color: #555a64;
  padding-top: 3px;
  margin-left: 8px;
  font-family: "Arial";
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
`;
