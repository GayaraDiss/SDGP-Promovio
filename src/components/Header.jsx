import '../styles/header.css';

export default function Header() {
    return (
        <header className="header">
            {/*<div className="user-info">Alicia Koch</div>*/}
            <nav>
                <a href="#">Post Schedule</a>
                <a href="#">CRM</a>
                <a href="#">Analytics</a>
                <a href="#">Settings</a>
                <a href="#">Spend Tracker</a>
            </nav>
        </header>
    );
}
