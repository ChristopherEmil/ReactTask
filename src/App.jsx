import TasksList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  
  return (
    <>
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm /* createTask={createTask}  *//>
      <TasksList /* tasks={tasks} deleteTask={deleteTask} *//>
      </div>
 
      </main>
    </>
  );
}

export default App;
