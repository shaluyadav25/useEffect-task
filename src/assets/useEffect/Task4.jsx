import { useEffect, useState } from "react";

const Task4 = () => {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
        <h2>User Profile</h2>
      <label htmlFor="name">Name: </label>

      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />
      <br />
      <label htmlFor="age">Age: </label>

      <input
        type="text"
        id="age"
        placeholder="Enter your age"
        onChange={(e) =>
          setUser({ ...user, age: e.target.value })
        }
      />
    </div>
  );
};

export default Task4;