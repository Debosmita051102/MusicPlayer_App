import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = async () => {
    const client_id = "b10ac7cc459d474e961a6603c15da715";
    const redirect_uri = "https://spotify-clone-api.netlify.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
  <Heading2> Welcome to our Music player app</Heading2>
  <Heading> EchoVibe</Heading>
      {/* <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        
        alt="spotify"
      /> */}

      <img
        src="https://www.transparentpng.com/thumb/music/png-music-clipart-5.png"
        alt="logo"
      />
      <button onClick={handleClick}>Connect EchoVibe</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:lightseagreen;
  gap: 5rem;
  img {
    height: 20vh;
  }


  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const Heading = styled.h1`
  color: black;
  font-size: 3rem;
  text-align: center;
  text-orientation:bold;

`;

const Heading2 = styled.h2`
   color:white;
   font-size:3rem;
   text-align:center;
`;
