/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { DeleteButton, SubmitButton } from "../Components/Buttons";
import {
  deleteTransactions,
  fetchTransactions,
  postTransactions,
} from "../Apis/crudApis";

const Users = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
    businessName: "",
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((res) => setTransactions(res));
  }, []);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: form.username,
      email: form.email,
      date_of_birth: form.dob,
      address: form.address,
      contact_no: form.phone,
      business_name: form.businessName,
    };
    postTransactions(data);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };

  const handleDelete = async (id) => {
    deleteTransactions(id);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center w-11/12">
      <form onSubmit={handleSubmit} className="flex flex-col w-2/4 p-2 m-4">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleInput}
          placeholder="Enter Username"
          className="py-2"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleInput}
          placeholder="Enter Email"
          className="py-2"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleInput}
          className="py-2"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleInput}
          className="py-2"
          placeholder="Enter Address"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleInput}
          className="py-2"
          placeholder="Enter Phone"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleInput}
          className="py-2"
          placeholder="Enter Business Name"
          style={{
            borderRadius: 0,
            borderBottom: "1px solid #6B7280",
            outline: "none",
          }}
        />

        <SubmitButton onClick={() => handleSubmit}>Submit</SubmitButton>
      </form>

      <br />

      <section className="flex flex-col w-full items-center">
        <table>
          <thead className="text-gray-800 text-xl">
            <th className="px-6 py-2">Sr. No</th>
            <th className="px-6 py-2">Name</th>
            <th className="px-6 py-2">Email</th>
            <th className="px-6 py-2">DOB</th>
            <th className="px-6 py-2">Actions</th>
          </thead>
          <tbody className="text-gray-600 text-lg">
            {transactions.map((trx, i) => (
              <tr key={trx.id}>
                <td className="px-6 py-2">{i + 1}</td>
                <td className="px-6 py-2">{trx.name}</td>
                <td className="px-6 py-2">{trx.email}</td>
                <td className="px-6 py-2">{trx.date_of_birth}</td>
                <td className="px-6 py-2">
                  <button
                    className="p-2 bg-custom-button-blue text-white mx-auto text-center rounded-lg py-2 px-4 box-border font-medium text-base shadow-md hover:shadow-lg"
                    onClick={() => {}}
                  >
                    edit
                  </button>

                  <DeleteButton
                    onClick={() => {
                      handleDelete(trx.id);
                    }}
                  >
                    delete
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Users;
