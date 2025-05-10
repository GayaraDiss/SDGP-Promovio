import { useState } from "react";
import "../styles/Reminder.css";

export default function Reminder() {
    const [reminders] = useState([
        {
            type: "Meeting Follow-up",
            client: "Acme Corporation",
            dueDate: "2024-02-15",
            status: "Pending",
            autoSend: true,
        },
        {
            type: "Document Review",
            client: "TechStart Inc",
            dueDate: "2024-02-14",
            status: "In Progress",
            autoSend: false,
        },
        {
            type: "Project Deadline",
            client: "Global Systems",
            dueDate: "2024-02-16",
            status: "Completed",
            autoSend: true,
        },
    ]);

    return (
        <div className="reminder-section">
            {/* Header Section */}
            <div className="reminder-header">
                <h1 className="reminder-title">Reminders</h1>
                <button className="add-reminder-button">+ New Reminder</button>
            </div>

            {/* Summary Cards */}
            <div className="reminder-summary">
                <div className="summary-card">
                    <p className="summary-label">Total Reminders</p>
                    <p className="summary-value">24</p>
                </div>
                <div className="summary-card">
                    <p className="summary-label">Due Today</p>
                    <p className="summary-value">8</p>
                </div>
                <div className="summary-card">
                    <p className="summary-label">Overdue</p>
                    <p className="summary-value">3</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="reminder-controls">
                <input
                    type="text"
                    placeholder="Search reminders..."
                    className="search-box"
                />
                <button className="filter-button">Filter</button>
            </div>

            {/* Reminder Table */}
            <div className="reminder-table">
                <table>
                    <thead>
                    <tr>
                        <th>Reminder Type</th>
                        <th>Client</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reminders.map((reminder, index) => (
                        <tr key={index}>
                            <td>{reminder.type}</td>
                            <td>{reminder.client}</td>
                            <td>{reminder.dueDate}</td>
                            <td>
                  <span className={`status-badge ${reminder.status.toLowerCase()}`}>
                    {reminder.status}
                  </span>
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <button className="mark-complete">✔</button>
                                    <span className="auto-send-label">Auto-send</span>
                                    <div
                                        className={`toggle-switch ${
                                            reminder.autoSend ? "active" : ""
                                        }`}
                                    ></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

