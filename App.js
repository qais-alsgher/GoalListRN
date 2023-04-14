import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const showModelHandler = () => {
    setModelVisible(true);
  };
  const hideModelHandler = () => {
    setModelVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={showModelHandler}
          color={"#5e0acc"}
          android_ripple={{ color: "#ddd", borderless: false }}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modelVisible}
          onCancel={hideModelHandler}
        />
        <View style={styles.goalContainer}>
          {/* use flatlist when  we have a lot of data like 1000 or more and we used scrollview when we have less data like 10 or 20*/}
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  title={itemData.item.value}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1e0854",
  },
  goalContainer: {
    marginTop: 20,
    flex: 4,
  },
});
