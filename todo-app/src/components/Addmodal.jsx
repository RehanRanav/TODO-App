import React, {useContext, useRef, useCallback, useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { TaskContext } from "../TaskContext";
import { toast } from "react-toastify";

function Addmodal() {
  const { setTasklist } = useContext(TaskContext);
  const [openModal, setOpenModal] = useState(false);
  const taskInputRef = useRef(null);

  const addTask = useCallback(() => {
    try {
      let inputTask = taskInputRef.current?.value;
      inputTask = inputTask.trim();
      if (inputTask.length > 0) {
        setTasklist((prevTask) => [
          ...prevTask,
          { task: inputTask, status: false },
        ]);

        toast.success("Task Added Successfully...");
      } else {
        toast.error("Please Enter the task...");
      }
      taskInputRef.current.value = ``;
      setOpenModal(false)
    } catch (e) {}
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>ADD TODO</Button>
      <Modal
        show={openModal}
        size="lg"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={taskInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              ADD Todo
            </h3>
            <div>
              <TextInput
                id="task"
                ref={taskInputRef}
                placeholder="Enter Your Task"
                required
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
            <div className="w-full">
              <Button onClick={addTask}>Add Todo</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Addmodal;
