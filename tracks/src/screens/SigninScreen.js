import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from "../context/AuthContext";

const SigninScreen = () => {
  const {state, signin} = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents/>
      <AuthForm
        headerText={"Sign In to Your Account"}
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText={"Sign In"}
      />
      <NavLink text={"Dont have an account? Sign Up"} route={"Signup"}/>
    </View>
  );
}

SigninScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
});

export default SigninScreen;