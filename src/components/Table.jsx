import { useState } from "react";
import StatusBadge from "./StatusBadge";
import SearchBar from "./SearchBar";
import CustomerForm from "./CustomerForm";
import ViewModal from "./ViewModal";
import "../styles/table.css";

export default function Table({ activeTab }) {
    const [data, setData] = useState([
        {
            contact: 'Earl Grayson',
            email: 'earl.grayson@example.com',
            leadStatus: 'New Lead',
            lastContact: '29 Jul 2023',
            companyName: 'Grayson Ltd',
            jobTitle: 'Sales Manager',
            industry: 'Retail'
        },
        {
            contact: 'Jake Vargas',
            email: 'jake.vargas@example.com',
            leadStatus: 'Contacted',
            lastContact: '1 Jul 2023',
            companyName: 'Vargas Corp',
            jobTitle: 'CEO',
            industry: 'Tech'
        }
    ]);

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setShowForm(true);
    };

    const handleView = (customer) => {
        setSelectedCustomer(customer);
        setShowViewModal(true);
    };

    const handleDelete = (email) => {
        setData(data.filter(customer => customer.email !== email));
    };

    const handleFormSubmit = (updatedCustomer) => {
        setData(data.map(c =>
            c.email === selectedCustomer.email
                ? { ...c, ...updatedCustomer, contact: updatedCustomer.fullName }
                : c
        ));
        setShowForm(false);
        setSelectedCustomer(null);
    };

    return (
        <>
            {activeTab === "Contacts" && <SearchBar />}

            <table className="lead-table">
                <thead>
                <tr>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Lead Status</th>
                    <th>Last Contact</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.contact}</td>
                        <td>{item.email}</td>
                        <td><StatusBadge status={item.leadStatus} /></td>
                        <td>{item.lastContact}</td>
                        <td>
                            <button className="action-btn view" onClick={() => handleView(item)}>View</button>
                            <button className="action-btn edit" onClick={() => handleEdit(item)}>Edit</button>
                            <button className="action-btn delete" onClick={() => handleDelete(item.email)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showForm && <CustomerForm customer={selectedCustomer} onSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />}
            {showViewModal && <ViewModal customer={selectedCustomer} onClose={() => setShowViewModal(false)} />}
        </>
    );
}
