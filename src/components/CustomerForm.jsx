import { useState } from "react";

const CustomerForm = ({ customer, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(() => ({
        fullName: customer?.contact || "",
        email: customer?.email || "",
        phone: customer?.phone || "",
        leadStatus: customer?.leadStatus || "New Lead",
        lastContact: customer?.lastContact || "",
        companyName: customer?.companyName || "",
        jobTitle: customer?.jobTitle || "",
        industry: customer?.industry || "",
    }));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{customer ? "Edit Contact" : "Add New Contact"}</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                    <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
                    <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} />
                    <input type="date" name="lastContact" value={formData.lastContact} onChange={handleChange} />

                    {/* Dropdown for Lead Status */}
                    <select name="leadStatus" value={formData.leadStatus} onChange={handleChange}>
                        <option value="New Lead">New Lead</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Interested">Interested</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Converted">Converted</option>
                        <option value="Lost">Lost</option>
                    </select>

                    <div className="modal-buttons">
                        <button type="submit" className="save-btn">Save</button>
                        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerForm;
