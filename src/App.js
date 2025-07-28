import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./components/UserTable";
import FilterBar from "./components/FilterBar";
import ConfirmationModal from "./components/ConfirmationModal";
import Toast from "./components/Toast";
import ViewModal from "./components/ViewModal";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    nameEmail: "",
    role: "",
    status: "",
  });
  const [sort, setSort] = useState({ field: "name", order: "asc" });
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => ({
          ...user,
          role: Math.random() > 0.5 ? "admin" : "user",
          status: Math.random() > 0.5 ? "active" : "inactive",
        }));
        setData(users);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleView = (id) => {
    const user = data.find((u) => u.id === id);
    setSelectedUser(user);
    setShowViewModal(true);
    console.log(`Viewing user ${id}`);
  };

  const confirmDelete = () => {
    setData(data.filter((user) => user.id !== selectedId));
    setShowModal(false);
    setToastMessage(`User ${selectedId} deleted`);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedUser(null);
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 sm:p-2 md:p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
        <FilterBar filters={filters} setFilters={setFilters} />
        <UserTable
          data={data}
          sort={sort}
          setSort={setSort}
          filters={filters}
          onDelete={handleDelete}
          onView={handleView}
        />
        <ConfirmationModal
          show={showModal}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          userId={selectedId}
        />
        <ViewModal
          show={showViewModal}
          onClose={closeViewModal}
          user={selectedUser}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      </div>
    </div>
  );
}

export default App;
