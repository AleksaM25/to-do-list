import React, { useState } from "react";
import "./App.css";
import CourseGoalInput from "./components/CourseGoals/CourseGoalInput/CourseGoalInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoal, setCourseGoal] = useState([
    {
      text: "Prvi goal",
      id: "g1",
    },
    {
      text: "Drugi goal",
      id: "g2",
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoal((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });

      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalID) => {
    setCourseGoal((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalID);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  // Ako ima goloca (a ima jer smo ih rucno uneli) onda neka content bude ti golovi, a ako nema onda neka bude poruka iz kontenta
  if (courseGoal.length > 0) {
    content = (
      <CourseGoalList items={courseGoal} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseGoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
