import React from "react";
import { StatusBar } from "react-native";
import { Container, Teste, Scroll } from "./styles";
import { Header } from "../../Components/Header";
import { PostContainer } from "../../Components/PostContainer";

export const Home = () => {
  const posts = [
    {
      photo: "https://picsum.photos/200/300",
      name: "John Doe",
      username: "@johndoe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 10,
      comments: 5,
      retweets: 10,
      time: "1h",
    },
  ];

  return (
    <>
      <StatusBar />
      <Container>
        <Header />
        <Scroll>
          <PostContainer></PostContainer>
        </Scroll>
      </Container>
    </>
  );
};
