import React from "react";
import { StatusBar } from "react-native";
import { Container, Teste, Scroll } from "./styles";
import { Header } from "../../Components/Header";
import { PostContainer } from "../../Components/PostContainer";

export const Home = () => {
  const posts = [
    {
      photo:
        "https://pbs.twimg.com/profile_images/1533805208219881474/TQ4AaUXz_400x400.jpg",
      name: "malu",
      username: "maalufdias",
      time: "1s",
      content: "amo meu namorado",
      comments: 13305,
      retweets: 13305,
      likes: 13305,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1555014292562403335/ryAd1IE-_400x400.jpg",
      name: "𝔸𝕣𝕣𝕦𝕕𝕒",
      username: "Arrudonimous",
      time: "10s",
      content: "Amo minha namorada",
      comments: 1200000,
      retweets: 1200000,
      likes: 1200000,
      contentPhoto:
        "https://pbs.twimg.com/media/FdA1nKTWAAE8V5f?format=jpg&name=4096x4096",
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1535051202467069972/Nal99vZg_400x400.jpg",
      name: "3,14res",
      username: "xicarass",
      time: "23h",
      content: "Jake peralta é meu crush",
      comments: 100000,
      retweets: 100000,
      likes: 100000,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1540437973883387906/UuZKDrYq_400x400.jpg",
      name: "Uluketa",
      username: "Uluketa",
      time: "1w",
      content: "A quíron é o futuro",
      comments: 100000,
      retweets: 100000,
      likes: 100000,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1533801521611161601/D4WE4wVB_400x400.jpg",
      name: "gabs ツ",
      username: "aGaribelaa",
      time: "12m",
      content: "A quíron ta ficando muito boa",
      comments: 20000,
      retweets: 20000,
      likes: 20000,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1564029553290395654/e_ZQiEw__400x400.jpg",
      name: "julio | 📖: suicidas",
      username: "_jwlio",
      time: "12m",
      content: "gosto de livro de romance",
      comments: 2,
      retweets: 1,
      likes: 1,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1552675187853770752/0IJeaMp6_400x400.jpg",
      name: "Diego Fernandes",
      username: "dieegosf",
      time: "Dec 22, 2021",
      content: `Ninguém vai entregar mais conteúdo de qualidade em programação do que a Rocketseat em 2022. Podem anotar!

2021 preparamos muito o terreno para tudo o que vai acontecer em 2022, se preparem.`,
      comments: 2200000,
      retweets: 2200000,
      likes: 2200000,
    },
  ];

  return (
    <>
      <StatusBar />
      <Container>
        <Header />
        <Scroll>
          {posts.map((post) => (
            <PostContainer
              photo={post.photo}
              name={post.name}
              username={post.username}
              time={post.time}
              content={post.content}
              comments={post.comments}
              retweets={post.retweets}
              likes={post.likes}
              contentPhoto={post.contentPhoto}
            />
          ))}
        </Scroll>
      </Container>
    </>
  );
};
