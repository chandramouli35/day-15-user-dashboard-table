import { useState } from "react";

function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-col md:flex-row gap-4">
      <input
        name="nameEmail"
        value={filters.nameEmail}
        onChange={handleChange}
        placeholder="Filter by Name or Email"
        className="p-2 border rounded w-full sm:w-full md:w-1/3"
      />
      <select
        name="role"
        value={filters.role}
        onChange={handleChange}
        className="p-2 border rounded w-full sm:w-full md:w-1/3"
      >
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="p-2 border rounded w-full sm:w-full md:w-1/3"
      >
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}

export default FilterBar;
