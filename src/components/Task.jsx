import { useState } from "react";
import "../styles/Task.css";

const Task = () => {
    // Initial task list
    const [tasks, setTasks] = useState([
        { title: "Design System Updates", dueDate: "Feb 28", priority: "High", assignee: "John Doe", comments: 2, attachments: 3, status: "To Do" },
        { title: "API Integration", dueDate: "Feb 25", priority: "High", assignee: "Jane Smith", comments: 4, attachments: 8, status: "In Progress" },
        { title: "Landing Page Design", dueDate: "Feb 20", priority: "Medium", assignee: "Mike Johnson", comments: 6, attachments: 12, status: "Done" }
    ]);

    // State for the new task form
    const [newTask, setNewTask] = useState({
        title: "",
        dueDate: "",
        priority: "Medium",
        assignee: "",
        status: "To Do",
        comments: 0,
        attachments: 0
    });

    // State to show/hide the task form
    const [showForm, setShowForm] = useState(false);

    // Function to handle input changes
    const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    // Function to add a new task
    const handleAddTask = () => {
        if (newTask.title.trim() === "") {
            alert("Task title is required!");
            return;
        }
        setTasks([...tasks, newTask]);
        setNewTask({ title: "", dueDate: "", priority: "Medium", assignee: "", status: "To Do", comments: 0, attachments: 0 });
        setShowForm(false);
    };

    return (
        <div className="task-section">
            {/* Header Section */}
            <div className="task-header">
                <h1 className="task-title">Tasks</h1>
                <button className="add-task-button" onClick={() => setShowForm(!showForm)}>+ Add Task</button>
            </div>

            {/* Task Form (Visible only when adding a task) */}
            {showForm && (
                <div className="task-form">
                    <input type="text" name="title" placeholder="Task Title" value={newTask.title} onChange={handleChange} required />
                    <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} />
                    <select name="priority" value={newTask.priority} onChange={handleChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <input type="text" name="assignee" placeholder="Assignee" value={newTask.assignee} onChange={handleChange} />
                    <select name="status" value={newTask.status} onChange={handleChange}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            )}

            {/* Task Columns */}
            <div className="task-columns">
                {["To Do", "In Progress", "Done"].map((column) => (
                    <div key={column} className="task-column">
                        <h2 className="column-title">{column}</h2>
                        <div className="task-list">
                            {tasks
                                .filter(task => task.status === column)
                                .map((task, index) => (
                                    <div key={index} className="task-card">
                                        <div className="task-header">
                                            <span className="task-name">{task.title}</span>
                                        </div>
                                        <div className="task-details">
                                            <span className="task-date">{task.dueDate}</span>
                                            <span className="task-comments">{task.comments} comments</span>
                                            <span className="task-files">{task.attachments} files</span>
                                        </div>
                                        <div className="task-footer">
                                            <span className={`task-priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                                            <span className="task-assignee">{task.assignee}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Task;
