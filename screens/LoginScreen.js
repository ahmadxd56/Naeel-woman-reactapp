import Home from "../screens/Home";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Alert,StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native";
import { icons} from "../constants";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

 const user = {
   email: "Ahmad",
   password: "Ahmad"
 }

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("");
 
  return (
      
    <View style={styles.container}>
    <KeyboardAwareScrollView style={styles.scrollview}>
      <Image style={styles.image} source={icons.naeel} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={()=> {
          if(email === user.email && password === user.password){
            navigation.navigate(Home);
          } else {
            Alert.alert("Wrong password. Try again.");
          }
        }}
      >
        <Text style={styles.loginText}>{buttonText}LOGIN</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginLeft:65,
    marginTop:100,
    marginBottom: 40,
  },
 
  inputView: {
    marginLeft:32,
    backgroundColor: "white",
    borderRadius: 0,
    width: "80%",
    height: 45,
    marginBottom: 20,
    borderWidth: 0.2,
    alignItems: 'flex-start',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign:"center"
  },
 
  loginBtn: {
    marginLeft:60,
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    color:'white',
    backgroundColor: "#9da0a1",
  },
  scrollview:{
    width:385,
  },
});

export default LoginScreen;