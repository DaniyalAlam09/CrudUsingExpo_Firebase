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
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "./config";
const Adding = () => {
  const [name, setName] = useState("");
  const [fee, setFee] = useState("");
  const [rank, setRank] = useState("");
  const [location, setLocation] = useState("");
  const create = () => {
    addDoc(collection(db, "University"), {
      name: name,
      fee: fee,
      rank: rank,
      location: location,
    })
      .then(() => {
        console.log("sum");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <View style={{marginTop:100}}>
      <View >
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.textfiled}
          placeholder=" University."
          placeholderTextColor="black"
        />
      </View>

      <View >
        <TextInput
          value={fee}
          onChangeText={(fee) => setFee(fee)}
          style={styles.textfiled}
          placeholder=" Fee."
          placeholderTextColor="#003f5c"
        />
      </View>

      <View >
        <TextInput
          value={rank}
          onChangeText={(rank) => setRank(rank)}
          style={styles.textfiled}
          placeholder=" Rank."
          placeholderTextColor="black"
          secureTextEntry={true}
        />
      </View>
      <View >
        <TextInput
          value={location}
          onChangeText={(location) => setLocation(location)}
          style={styles.textfiled}
          placeholder=" Location."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>

      <Pressable style={styles.submitbtn} onPress={create}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
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

  submitbtn: {
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

export default Adding;
