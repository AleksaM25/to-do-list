import React, { useState } from "react";
import Button from "../../UI/Button";
import styles from "./CourseGoalInput.module.css";

const CourseGoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const formSubmiteHandler = (e) => {
    e.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmiteHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputHandler} />
      </div>
      <Button type="submite">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
