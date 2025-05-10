const ViewModal = ({ customer, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Contact Details</h2>
                <div className="modal-details">
                    <p><strong>Full Name:</strong> {customer.contact}</p>
                    <p><strong>Email:</strong> {customer.email}</p>
                    <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
                    <p><strong>Lead Status:</strong> {customer.leadStatus}</p>
                    <p><strong>Last Contact:</strong> {customer.lastContact}</p>
                    <p><strong>Company Name:</strong> {customer.companyName || "N/A"}</p>
                    <p><strong>Job Title:</strong> {customer.jobTitle || "N/A"}</p>
                    <p><strong>Industry:</strong> {customer.industry || "N/A"}</p>
                </div>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ViewModal;
