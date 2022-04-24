import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { borderRightColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const University = () => {
  const [data, setData] = useState([]);

  const get = () =>
    getDocs(collection(db, "University")).then((docSnap) => {
      let Uni = [];
      docSnap.forEach((doc) => {
        Uni.push({ ...doc.data(), id: doc.id });
      });

      setData(Uni);

      console.log("doc data", Uni);
    });
  useEffect(() => {
    const uma = get();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ id }, db) => id}
        renderItem={({ item }) => (
          <View>
            <View style={style.container}>
              <Image
                style={style.image}
                source={require("./assets/COMSATS.jpg")}
              />
              <View>
              <Text style={style.data}>University Name:{item.Name}</Text>
              <Text style={style.data}>Rank:{item.Rank}</Text>
              <Text style={style.data}>Fee:{item.fee}</Text>
              <Text style={style.data}>City:{item.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default University;

const style = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    width: 400,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    flexDirection:"row",
  },
  data: {
    margin: 5,
    fontSize: 19,
    color: "black",
  },
  input: {
    fontSize: 25,
  },
  image: {
    flex:0.4,
    width: 70,
    height: 70,
    marginTop: 40,
  },
});
