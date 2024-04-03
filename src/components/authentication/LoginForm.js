import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.loginWrapper}>
      <View style={styles.form}>
        <TextInput
          style={styles.form_input}
          //  value={username}
          placeholder={"Username"}
          onChangeText={(text) => onChange(text)}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
        <TextInput
          style={styles.form_input}
          //  value={password}
          placeholder={"Password"}
          //secureTextEntry
          onChangeText={(text) => onChange(text)}
        />
        <TouchableOpacity onPress={() => {}}>
	          <View style={styles.button}>
	            <Text style={styles.text} >{'Sign in'}</Text>
	          </View>
	     </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    marginTop:"10%" ,
    padding:40

  },
  form: {
    borderColor: "grey",
    borderTopEndRadius: 1,
  },

  form_input: {
    width: "100%",
    borderBottomWidth: 1,
    marginBottom:20
 },

 button:{
    backgroundColor :'blue',
    padding:20,
    alignItems:'center',
    color:'#fff'
 },

 text:{
 color:'#fff'
 }
});
