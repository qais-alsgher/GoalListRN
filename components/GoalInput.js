import { Button, TextInput, View, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.ImageGoal}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Add a New Goal"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonCotainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    paddingHorizontal: 20,
  },
  TextInput: {
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    borderWidth: 1,
    color: "#120438",
    padding: 10,
    width: "100%",
    borderRadius: 6,
    marginBottom: 20,
    fontSize: 16,
  },
  ImageGoal: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  ButtonCotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
});
