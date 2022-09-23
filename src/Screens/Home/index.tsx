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
      content: "Vtnc bolsonaro hahahahaha",
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
      content: "Odeio o William Carlos Galvão",
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
      content: "Eu sou tdd",
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
        "https://pbs.twimg.com/profile_images/1559375109609213954/H69EARpJ_400x400.jpg",
      name: "Lula 13",
      username: "LulaOficial",
      time: "12h",
      content: "qual foi @jairbolsonaro vamo ir um x1 no Fortnite",
      comments: 2200000,
      retweets: 2200000,
      likes: 2200000,
    },
    {
      photo:
        "https://pbs.twimg.com/profile_images/1559734581942800385/qtN3jE9H_400x400.jpg",
      name: "Jair M. Bolsonaro",
      username: "jairbolsonaro",
      time: "12h",
      content: "Eu vout e mata taokey? @LulaOficial",
      // comments: 1,
      // retweets: 0,
      // likes: 1,
      contentPhoto:
        "data:image/jpeg;base64,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",
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
