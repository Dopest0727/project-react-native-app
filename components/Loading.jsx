import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const Container = styled.View`
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Container>
        <LottieView
          ref={(animation) => {this.animation = animation;}}
          style={{width: 400,height: 400,}}
          source={require("../assets/Lotties/loader.json")}
        />
      </Container>
    );
  }
}
