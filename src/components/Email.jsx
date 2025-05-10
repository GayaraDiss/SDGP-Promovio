import { useState } from "react";
import  "../styles/Email.css";

export default function Email() {
    const [emails] = useState([
        {
            sender: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            subject: "Project Update: Q4 Marketing Campaign",
            preview: "Hi Sarah, I wanted to share the latest updates on our Q4 marketing campaign...",
            time: "10:30 AM",
            isUnread: true,
        },
        {
            sender: "Michael Chen",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            subject: "Design Review Meeting Notes",
            preview: "Here are the key points we discussed during today’s design review meeting...",
            time: "Yesterday",
            isUnread: false,
        },
        {
            sender: "Emily Rodriguez",
            avatar: "https://randomuser.me/api/portraits/women/46.jpg",
            subject: "Client Presentation Feedback",
            preview: "Thank you for presenting to our client today. They were very impressed...",
            time: "Yesterday",
            isUnread: true,
        },
        {
            sender: "David Kim",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            subject: "Weekly Team Sync Summary",
            preview: "Here’s a quick summary of what we covered in today’s team sync meeting...",
            time: "Mon",
            isUnread: false,
        },
        {
            sender: "Lisa Thompson",
            avatar: "https://randomuser.me/api/portraits/women/48.jpg",
            subject: "Product Launch Timeline",
            preview: "I’ve updated the product launch timeline based on our discussion...",
            time: "Mon",
            isUnread: false,
        },
    ]);

    return (
        <div className="email-app">
            {/* Sidebar */}
            <aside className="sidebar">
                <button className="new-email-btn">+ New Email</button>
                <ul className="nav-links">
                    <li className="active">📥 Inbox <span>12</span></li>
                    <li>📤 Sent <span>24</span></li>
                    <li>📝 Drafts <span>4</span></li>
                    <li>🗑️ Trash</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="email-content">
                {/* Header */}
                <div className="email-header">
                    <h1>Sent Emails</h1>
                    <div className="search-filter">
                        <input type="text" placeholder="Search emails..." />
                        <button>Filter ▼</button>
                    </div>
                </div>

                {/* Email List */}
                <div className="email-list">
                    {emails.map((email, index) => (
                        <div key={index} className={`email-card ${email.isUnread ? "unread" : ""}`}>
                            <input type="checkbox" className="email-checkbox" />
                            <img src={email.avatar} alt={email.sender} className="email-avatar" />
                            <div className="email-details">
                                <div className="email-top">
                                    <h3 className="email-sender">
                                        {email.sender} {email.isUnread && <span className="unread-dot">•</span>}
                                    </h3>
                                    <span className="email-time">{email.time}</span>
                                </div>
                                <h4 className="email-subject">{email.subject}</h4>
                                <p className="email-preview">{email.preview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
