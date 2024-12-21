import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.increaseButton]}
          onPress={onIncrease}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decreaseButton]}
          onPress={onDecrease}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fef4ff", // Pink muda
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d946ef", // Pink cerah
  },
  score: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#0ea5e9", // Biru langit
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  increaseButton: {
    backgroundColor: "#ec4899", // Pink untuk tombol tambah
    shadowColor: "#ec4899",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  decreaseButton: {
    backgroundColor: "#38bdf8", // Biru langit untuk tombol kurang
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default TeamScore;
