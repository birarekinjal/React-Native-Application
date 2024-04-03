import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login </Text>
        </View>
        <LoginForm/>
      </SafeAreaView>
    </View>

  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      height:'100%',
      
    },
    loginContainer:{
        height: '50%',
        backgroundColor: 'powderblue',
        justifyContent:'center',
        alignItems:'center',
    },
    loginText:{
        fontSize:22,
        color:'#fff' 
    }
  });
  
