import React, { useContext, useEffect } from "react";
import { TaskContext } from "../TaskContext";
import Notask from "../images/Notasks.jpg";
import TaskCard from "./TaskCard";
import Addmodal from "./Addmodal";

function HomePage() {
  const { tasklist, setTasklist } = useContext(TaskContext);

  useEffect(() => {
    let tasks = localStorage.getItem("tasklist");
    tasks = JSON.parse(tasks);
    if (tasks !== null) {
      setTasklist(tasks);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("tasklist", JSON.stringify(tasklist));
    }, 800);
  }, [tasklist]);
  
  console.log(tasklist)
  return (
    <div className="w-full text-center">
      <div className="flex justify-center mt-20">
        <Addmodal />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center w-1/2 m-auto p-5 max-sm:w-full">
        {tasklist.length > 0 ? (
          tasklist.map((task, index) => {
            return (
              <TaskCard
                key={index}
                index={index}
                task={task.task}
                status={task.status}
              />
            );
          })
        ) : (
          <img
            src={Notask}
            alt="No Task Found"
            className="m-auto p-auto w-1/2"
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
