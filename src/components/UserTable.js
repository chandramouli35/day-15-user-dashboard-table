import { useState } from "react";

function UserTable({ data, sort, setSort, filters, onDelete, onView }) {
  const handleSort = (field) => {
    setSort((prev) => ({
      field,
      order: prev.field === field && prev.order === "asc" ? "desc" : "asc",
    }));
  };

  const sortedData = [...data].sort((a, b) => {
    if (sort.order === "asc") return a[sort.field] > b[sort.field] ? 1 : -1;
    return a[sort.field] < b[sort.field] ? 1 : -1;
  });

  const filteredData = sortedData.filter((item) => {
    return (
      (filters.nameEmail === "" ||
        item.name.toLowerCase().includes(filters.nameEmail.toLowerCase()) ||
        item.email.toLowerCase().includes(filters.nameEmail.toLowerCase())) &&
      (!filters.role || item.role === filters.role) &&
      (!filters.status || item.status === filters.status)
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th
              onClick={() => handleSort("name")}
              className="p-1 sm:p-1 md:p-2 text-left cursor-pointer hover:bg-gray-200"
            >
              Name {sort.field === "name" && (sort.order === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("email")}
              className="p-1 sm:p-1 md:p-2 text-left cursor-pointer hover:bg-gray-200"
            >
              Email{" "}
              {sort.field === "email" && (sort.order === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("role")}
              className="p-1 sm:p-1 md:p-2 text-left cursor-pointer hover:bg-gray-200"
            >
              Role {sort.field === "role" && (sort.order === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("status")}
              className="p-1 sm:p-1 md:p-2 text-left cursor-pointer hover:bg-gray-200"
            >
              Status{" "}
              {sort.field === "status" && (sort.order === "asc" ? "↑" : "↓")}
            </th>
            <th className="p-1 sm:p-1 md:p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="hover-row">
              <td className="p-1 sm:p-1 md:p-2">{user.name}</td>
              <td className="p-1 sm:p-1 md:p-2">{user.email}</td>
              <td className="p-1 sm:p-1 md:p-2">{user.role || "user"}</td>
              <td className="p-1 sm:p-1 md:p-2">{user.status || "active"}</td>
              <td className="p-1 sm:p-1 md:p-2">
                <button
                  onClick={() => onView(user.id)}
                  className="p-1 sm:p-1 md:p-1 bg-blue-500 text-white rounded mr-1 sm:mr-1 md:mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="p-1 sm:p-1 md:p-1 bg-red-500 text-white rounded mr-1 sm:mr-1 md:mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
