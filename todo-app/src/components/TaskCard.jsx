import React, { useEffect, useRef, useState } from "react";
import Deletebtn from "../images/trash.svg";
import Editbtn from "../images/edit.svg";
import { Button } from "flowbite-react";

function TaskCard({ task, index }) {
  const [completeTask, setCompleteTask] = useState(false);
  const [disableTask, setDisableTask] = useState(true);
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current.focus();
  }, [disableTask]);

  const handleEdit = () => {
    setDisableTask(false);
  };

  return (
    <div className="flex justify-between gap-2 border h-fit w-full p-3 rounded shadow-md font-mono">
      <input
        ref={taskInputRef}
        type="text"
        id="todotask"
        className="h-fit border-none text-gray-900 text-sm rounded block w-fit p-2.5"
        required
        value={task}
        disabled={disableTask}
      />
      <div className="flex justify-end items-center flex-wrap gap-3">
        {disableTask ? (
          <button
            className="w-fit h-fit text-center border rounded z-10 bg-white hover:bg-slate-100"
            title="Delete Task"
          >
            <img
              src={Deletebtn}
              alt="Enter"
              className="p-1 min-w-10 min-h-10"
            />
          </button>
        ) : (
          <Button>Add</Button>
        )}

        <button
          onClick={handleEdit}
          className="w-fit h-fit text-center border rounded z-10 bg-white hover:bg-slate-100"
          title="Edit Task"
        >
          <img src={Editbtn} alt="Enter" className="p-1 min-w-10 min-h-10" />
        </button>

        <input
          type="checkbox"
          className="p-1 min-w-10 min-h-8 rounded text-blue-500"
          // onChange={handleStatus}
          // ref={checkRef}
        />
      </div>
    </div>
  );
}

export default TaskCard;
