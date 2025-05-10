import "../styles/currentpage.css";
import SearchBar from "./SearchBar"; // Import SearchBar

export default function CurrentPage({ setActiveTab, activeTab }) {
    return (
        <div className="currentPageContainer">
            <div className="currentPageHeader">
                <div className="header-left">
                    <div className="title">
                        <h2>CRM</h2>
                    </div>
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === "Contacts" ? "active" : ""}`}
                            onClick={() => setActiveTab("Contacts")}
                        >
                            Contacts
                        </button>
                        <button
                            className={`tab ${activeTab === "Email" ? "active" : ""}`}
                            onClick={() => setActiveTab("Email")}
                        >
                            Email
                        </button>
                        <button
                            className={`tab ${activeTab === "Task" ? "active" : ""}`}
                            onClick={() => setActiveTab("Task")}
                        >
                            Task
                        </button>
                        <button
                            className={`tab ${activeTab === "Reminder" ? "active" : ""}`}
                            onClick={() => setActiveTab("Reminder")}
                        >
                            Reminder
                        </button>
                    </div>
                </div>

                <div className="header-search">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-customers">Search Customers</button>
                </div>
            </div>

            {/* Conditionally render SearchBar only when activeTab is "Contacts" */}
            {activeTab === "Contacts" && <SearchBar />}
        </div>
    );
}
