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
} from "./styles";

import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export const PostContainer = (props: any) => {
  const [commentsAd, setCommentsAd]: any = useState<number>();
  const [comments, setComments]: any = useState(props.comments);

  const [retweetsAd, setRetweetsAd]: any = useState<number>();
  const [retweets, setRetweets]: any = useState(props.retweets);

  const [likesAd, setLikesAd]: any = useState<number>();
  const [likes, setLikes]: any = useState(props.likes);

  useEffect(() => {
    if (comments > 10000) {
      if (comments > 1000000) {
        setCommentsAd("M");
        setComments((comments / 1000000).toFixed(2));
      }
      if (comments > 10000 && comments < 1000000) {
        setCommentsAd("K");
        setComments(Math.floor(comments / 1000));
      }
    }

    if (retweets > 10000) {
      if (retweets > 1000000) {
        setRetweetsAd("M");
        setRetweets((retweets / 1000000).toFixed(2));
      }
      if (retweets > 10000 && retweets < 1000000) {
        setRetweetsAd("K");
        setRetweets(Math.floor(comments / 1000));
      }
    }

    if (likes > 10000) {
      if (likes > 1000000) {
        setLikesAd("M");
        setLikes((likes / 1000000).toFixed(2));
      }
      if (likes > 10000 && likes < 1000000) {
        setLikesAd("K");
        setLikes(Math.floor(likes / 1000));
      }
    }
  }, []);

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
        <PostData>
          <CommentsContainer>
            <FontAwesome5 name="comment" size={18} color="#555A64" />
            <CommentsNumber>
              {comments}
              {commentsAd}
            </CommentsNumber>
          </CommentsContainer>
          <RetweetsContainer>
            <AntDesign name="retweet" size={18} color="#555A64" />
            <RetweetsNumber>
              {retweets}
              {retweetsAd}
            </RetweetsNumber>
          </RetweetsContainer>
          <LikesContainer>
            <Ionicons name="heart-outline" size={18} color="#555A64" />
            <LikesNumber>
              {likes}
              {likesAd}
            </LikesNumber>
          </LikesContainer>
          <AntDesign name="sharealt" size={16} color="#555A64" />
        </PostData>
      </PostInfo>
    </Container>
  );
};
