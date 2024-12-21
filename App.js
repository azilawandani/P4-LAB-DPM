import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import TeamScore from "./src/components/TeamScore";

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleScoreChange = (team, operation) => {
    if (team === "A") {
      if (operation === "add") {
        if (scoreA < 10) setScoreA(scoreA + 1);
        if (scoreA + 1 === 10) Alert.alert("Game Over", "Tim A Menang!");
      } else if (operation === "subtract" && scoreA > 0) {
        setScoreA(scoreA - 1);
      }
    } else {
      if (operation === "add") {
        if (scoreB < 10) setScoreB(scoreB + 1);
        if (scoreB + 1 === 10) Alert.alert("Game Over", "Tim B Menang!");
      } else if (operation === "subtract" && scoreB > 0) {
        setScoreB(scoreB - 1);
      }
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Scoreboard</Text>

      <TeamScore
        teamName="Tim A"
        score={scoreA}
        onIncrease={() => handleScoreChange("A", "add")}
        onDecrease={() => handleScoreChange("A", "subtract")}
      />

      <TeamScore
        teamName="Tim B"
        score={scoreB}
        onIncrease={() => handleScoreChange("B", "add")}
        onDecrease={() => handleScoreChange("B", "subtract")}
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef9ff", // Gradasi pink dan biru langit
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#ec4899", // Pink cerah
    textShadowColor: "#d946ef",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  resetButton: {
    backgroundColor: "#38bdf8", // Tombol reset biru langit
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  resetText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
