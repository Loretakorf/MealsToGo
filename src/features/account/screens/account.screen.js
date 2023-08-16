import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountBackGround,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { AnimationWrapper } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackGround>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          autoPlay
          loop
          resizeMode="cover"
          key="animation"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackGround>
  );
};
