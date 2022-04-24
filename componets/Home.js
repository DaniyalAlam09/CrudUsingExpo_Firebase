import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link } from "@react-navigation/native";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "./config";
import University from "./University";
import Adding from "./Adding";
const Home = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      email: "admin",
      password: "admin",
    };

    if (email == hardcodedCred.email && password == hardcodedCred.password) {
      navigation.navigate(Adding);
    } else {
      addDoc(collection(db, "User1"), {
        password: password,
        email: email,
      });

      navigation.navigate(University);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3 }}>
        <Image
          style={styles.image}
          source={require("./assets/Whattsapp.png")}
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <TextInput
          style={styles.textfiled}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder=" Email."
          placeholderTextColor="#003f5c"
        />
        <TextInput
          style={styles.textfiled}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder=" Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
        <Link to={{ screen: "Signup" }} style={styles.forgot}>
          Forgot Password?
        </Link>
      </View>
      <View style={{ flex: 0.3 }}>
        <Pressable style={styles.loginBtn} onPress={handleLoginSubmit}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  textfiled: {
    width: 300,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  forgot: {
    color: "#2196F3",
    textAlign: "right",
    marginRight: 40,
  },

  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
  },


  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: 100,
    backgroundColor: "#2196F3",
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
});

export default Home;
