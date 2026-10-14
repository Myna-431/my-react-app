import { useState, useEffect } from "react";
import "./Dashboard.css";

// React Functional Component
const Dashboard = () => {
  // -------------------------------------------------------------
  // 1. STATE MANAGEMENT (useState)
  // -------------------------------------------------------------

  // State to hold user profile information
  const [profile, setProfile] = useState(null);

  // State to hold the list of tasks (with some initial sample tasks)
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete React Assignment", priority: "High", completed: false },
    { id: 2, name: "Revise JavaScript ES6 Concepts", priority: "Medium", completed: true },
    { id: 3, name: "Submit Project to GitHub", priority: "Low", completed: false },
  ]);

  // Form input states for adding a new task
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  // State to manage Light Mode / Dark Mode (Requirement 7)
  const [darkMode, setDarkMode] = useState(false);

  // State for task list filtering ('All', 'Pending', 'Completed')
  const [filterTab, setFilterTab] = useState("All");

  // -------------------------------------------------------------
  // 2. FETCH USER PROFILE (useEffect - Requirement 8)
  // Runs a SINGLE TIME when the website/page first loads
  // -------------------------------------------------------------
  useEffect(() => {
    // Arrow Function simulating fetching user data from an API or database
    const fetchUserData = () => {
      const userProfile = {
        name: "Mynadevi.M",
        rollnumber: "24IT063",
        department: "IT",
        role: "Student",
      };
      setProfile(userProfile);
    };

    fetchUserData();
  }, []); // Empty dependency array [] ensures this runs only once on mount

  // -------------------------------------------------------------
  // 3. TASK COUNTERS (filter() - Requirement 2 & 6)
  // -------------------------------------------------------------
  const totalTasks = tasks.length;
  // filter() to count completed tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  // filter() to count pending tasks
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  // -------------------------------------------------------------
  // 4. PRIORITY STYLING (switch statement - Requirement 4 & 9)
  // -------------------------------------------------------------
  const getPriorityInfo = (priorityLevel) => {
    switch (priorityLevel) {
      case "High":
        return {
          borderColor: "#ef4444",
          badgeClass: "priority-badge priority-high",
        };
      case "Medium":
        return {
          borderColor: "#f59e0b",
          badgeClass: "priority-badge priority-medium",
        };
      case "Low":
        return {
          borderColor: "#10b981",
          badgeClass: "priority-badge priority-low",
        };
      default:
        return {
          borderColor: "#64748b",
          badgeClass: "priority-badge priority-low",
        };
    }
  };

  // -------------------------------------------------------------
  // 5. EVENT HANDLERS (Arrow Functions, Spread Operator, filter)
  // -------------------------------------------------------------

  // Requirement 3: Add a new task using Spread Operator (...)
  const handleAddTask = (e) => {
    e.preventDefault();

    // if/else statement for input validation (Requirement 9)
    if (taskName.trim() === "") {
      alert("Please enter a valid task name!");
      return;
    } else {
      const newTask = {
        id: Date.now(), // Generate unique ID using timestamp
        name: taskName.trim(),
        priority: priority,
        completed: false,
      };

      // Spread Operator (...) to add new task without mutating existing array
      setTasks([...tasks, newTask]);

      // Reset the form input
      setTaskName("");
      setPriority("Medium");
    }
  };

  // Requirement 6: Mark tasks as completed/pending using Spread Operator (...)
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        // Spread Operator (...) to toggle the completed status
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Requirement 5: Delete task from the list using filter()
  const handleDeleteTask = (idToDelete) => {
    // filter() removes the task matching idToDelete
    const remainingTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(remainingTasks);
  };

  // Requirement 7: Toggle Light and Dark Mode
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Filter tasks based on selected tab ('All', 'Pending', 'Completed')
  const filteredTasks = tasks.filter((task) => {
    if (filterTab === "Completed") {
      return task.completed;
    } else if (filterTab === "Pending") {
      return !task.completed;
    }
    return true; // 'All'
  });

  // -------------------------------------------------------------
  // 6. DESTRUCTURING (Requirement 9)
  // -------------------------------------------------------------
  // Safely destructure profile details
  const { name, rollnumber, department, role } = profile || {
    name: "Loading...",
    rollnumber: "...",
    department: "...",
    role: "...",
  };

  // Array of stats for rendering with map()
  const statsList = [
    { label: "Total Tasks", value: totalTasks, icon: "📋", type: "total" },
    { label: "Completed", value: completedTasks, icon: "✅", type: "completed" },
    { label: "Pending", value: pendingTasks, icon: "⏳", type: "pending" },
  ];

  return (
    <div className={`dashboard-app ${darkMode ? "dark" : "light"}`}>
      <div className="dashboard-container">
        {/* Top Header & Theme Switcher */}
        <header className="header-bar">
          <div className="header-title-group">
            <h1>Task Management Dashboard</h1>
            <p>Organize, prioritize, and track your daily work</p>
          </div>

          {/* Requirement 7: Light/Dark Mode Switcher */}
          <button
            className="theme-toggle-btn"
            onClick={handleToggleTheme}
            aria-label="Toggle Theme"
          >
            <span>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
          </button>
        </header>

        {/* Requirement 1: User Profile & Welcome Message */}
        <section className="profile-card">
          <div className="profile-avatar">👤</div>
          <div className="profile-details">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-welcome">
              Welcome back! Here is an overview of your progress today.
            </p>
            <div className="profile-badges">
              <span className="profile-tag">🎓 Roll No: {rollnumber}</span>
              <span className="profile-tag">🏬 Dept: {department}</span>
              <span className="profile-tag">💼 Role: {role}</span>
            </div>
          </div>
        </section>

        {/* Requirement 2: Task Counters (Total, Completed, Pending) using map() */}
        <section className="stats-grid">
          {statsList.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className={`stat-icon ${stat.type}`}>{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Requirement 3: Add New Task Form */}
        <section className="task-form-card">
          <h2 className="form-title">➕ Add New Task</h2>
          <form className="task-form" onSubmit={handleAddTask}>
            <input
              type="text"
              className="task-input"
              placeholder="What do you need to do?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />

            <select
              className="priority-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">🔴 High Priority</option>
              <option value="Medium">🟡 Medium Priority</option>
              <option value="Low">🟢 Low Priority</option>
            </select>

            <button type="submit" className="btn-add">
              Add Task
            </button>
          </form>
        </section>

        {/* Requirement 4, 5, 6: Task List, Priority Colors, Delete, and Complete */}
        <section className="task-list-section">
          <div className="task-list-header">
            <h2>Your Tasks ({filteredTasks.length})</h2>

            {/* Filter buttons */}
            <div className="filter-buttons">
              {["All", "Pending", "Completed"].map((tab) => (
                <button
                  key={tab}
                  className={`filter-btn ${filterTab === tab ? "active" : ""}`}
                  onClick={() => setFilterTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🎉</div>
              <p>No tasks found for &quot;{filterTab}&quot;! Keep up the good work.</p>
            </div>
          ) : (
            <div className="task-list">
              {/* Requirement 4: Display tasks using map() */}
              {filteredTasks.map((task) => {
                // Destructuring task properties (Requirement 9)
                const { id, name: title, priority: taskPriority, completed } = task;
                const priorityInfo = getPriorityInfo(taskPriority);

                return (
                  <div
                    key={id}
                    className={`task-item ${completed ? "is-completed" : ""}`}
                    style={{ borderLeftColor: priorityInfo.borderColor }}
                  >
                    {/* Left: Checkbox & Title */}
                    <div className="task-item-left">
                      <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={completed}
                        onChange={() => handleToggleComplete(id)}
                        aria-label="Toggle task completed"
                      />
                      <span className="task-title">{title}</span>
                    </div>

                    {/* Right: Priority Badge & Delete Button */}
                    <div className="task-item-right">
                      <span className={priorityInfo.badgeClass}>
                        {taskPriority}
                      </span>

                      {/* Requirement 5: Delete Task Button */}
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteTask(id)}
                        title="Delete task"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;