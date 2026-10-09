"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket?._id === "new" || !ticket?._id ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = EDITMODE ? `/api/Tickets/${ticket._id}` : "/api/Tickets";
    const method = EDITMODE ? "PUT" : "POST";

    const res = await fetch(url, {
      method: method,
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("Server Error Details:", res.status, errorData);
      throw new Error(
        `Failed to ${EDITMODE ? "update" : "create"} Ticket. Status: ${res.status}`,
      );
    }

    router.push("/");
    router.refresh();
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <h3>{EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}</h3>

        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <React.Fragment key={num}>
              <input
                id={`priority-${num}`}
                name="priority"
                type="radio"
                onChange={handleChange}
                value={num}
                checked={formData.priority == num}
              />
              <label htmlFor={`priority-${num}`} className="mr-2 ml-1">
                {num}
              </label>
            </React.Fragment>
          ))}
        </div>

        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className="btn max-w-xs cursor-pointer"
          value={EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
