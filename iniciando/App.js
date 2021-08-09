import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [trocaTexto, setTrocaTexto] = useState("");
  const [inputTextData, setInputTextData] = useState("");

  const handleText = (e) => {
    setInputTextData(e);
  };

  const handleTrocaTexto = (e) => {
    setInputTextData(e);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text>{inputTextData}</Text>
        <TextInput
          style={styles.input}
          value={inputTextData}
          onChangeText={handleText}
        />
        <Button title="Enviando" onPress={() => handleTrocaTexto("teste")} />
      </View>
      <ScrollView>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado3}></View>
      </ScrollView>
      <View>
        <Text>Fim</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  quadrado1: {
    backgroundColor: "green",
    height: 60,
  },
  quadrado2: {
    backgroundColor: "#ccc",
    height: 60,
  },
  quadrado3: {
    backgroundColor: "#ffccaa",
    height: 60,
  },
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "red",
  },
});
