import {
  Container,
  PostInfo,
  Avatar,
  PostHeader,
  PostHeaderName,
  PostHeaderUsername,
  TimeStamp,
  PostContent,
  Content,
  PostData,
  CommentsNumber,
  RetweetsNumber,
  LikesNumber,
  CommentsContainer,
  RetweetsContainer,
  LikesContainer,
  ContentPhoto,
  ContentPhotoContainer,
} from "./styles";

import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export const PostContainer = (props: any) => {
  // const [photoModalVisible, setphotoModalVisible] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  function setAd(value: number) {
    if (value > 10000) {
      if (value > 1000000) {
        const result = (value / 1000000).toFixed(2);
        return result + "M";
      }
      if (value > 10000 && value < 1000000) {
        const result = Math.floor(value / 1000);
        return result + "K";
      }
    }
    return value;
  }

  let imageContent;
  if (props.contentPhoto) {
    imageContent = (
      <ContentPhotoContainer onClick="">
        <ContentPhoto source={{ uri: props.contentPhoto }}></ContentPhoto>
      </ContentPhotoContainer>
    );
  } else {
    imageContent = null;
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: props.photo,
        }}
      />
      <PostInfo>
        <PostHeader>
          <PostHeaderName>{props.name}</PostHeaderName>
          <PostHeaderUsername>@{props.username}</PostHeaderUsername>
          <TimeStamp>∙ {props.time}</TimeStamp>
        </PostHeader>
        <PostContent>
          <Content>{props.content}</Content>
        </PostContent>
        {imageContent}
        <PostData>
          <CommentsContainer>
            <FontAwesome5 name="comment" size={18} color="#555A64" />
            <CommentsNumber>{setAd(props.comments)}</CommentsNumber>
          </CommentsContainer>
          <RetweetsContainer>
            <AntDesign name="retweet" size={18} color="#555A64" />
            <RetweetsNumber>{setAd(props.retweets)}</RetweetsNumber>
          </RetweetsContainer>
          <LikesContainer>
            <Ionicons name="heart-outline" size={18} color="#555A64" />
            <LikesNumber>{setAd(likes)}</LikesNumber>
          </LikesContainer>
          <AntDesign name="sharealt" size={16} color="#555A64" />
        </PostData>
      </PostInfo>
    </Container>
  );
};
