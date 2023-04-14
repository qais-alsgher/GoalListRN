import { View, Text, Pressable, StyleSheet } from "react-native";
export default function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#ddd", borderless: false, opacity: 0.3 }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#red" : "#5e0acc",
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.textGoal}>{props.title}</Text>
      </Pressable>
    </View>
    // allow it to press on the whole view
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  textGoal: {
    color: "#fff",
    fontSize: 16,
    padding: 8,
  },
});
