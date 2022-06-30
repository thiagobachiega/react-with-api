import TaskType from "../types/task-type";

type PostTodoServiceProps = {
  task : TaskType
};

async function postTodoService(task: PostTodoServiceProps) {
  console.log('post',task)
  return fetch(
    "http://localhost:3004/todos",
    { method: "POST", 
    body: JSON.stringify(task),
    headers: {"Content-type": "application/json"}
    }
  )
}

export default postTodoService;