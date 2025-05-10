
import '../styles/SearchBar.css';



export default function SearchBar() {
    return (

        <div className="search-bar-container">
            <div className="tabs-container">
                <div className="filters">
                    <button className="button button-all">All</button>
                    <button className="button button-newLead">New Lead</button>
                    <button className="button button-contacted">Contacted</button>
                    <button className="button button-interested">Interested</button>
                    <button className="button button-negotiation">Negotiation</button>
                    <button className="button button-converted">Converted</button>
                    <button className="button button-lost">Lost</button>
                </div>
            </div>
        </div>

    );
}
