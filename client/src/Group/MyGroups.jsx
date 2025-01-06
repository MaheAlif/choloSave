import { useState, useEffect, useContext } from "react";
import MyGroupCard from "./MyCreatedGroups/MyGroupCard";
import { userContext } from "../Provider/ContextProvider";

const MyGroups = () => {
  const [groupData, setGroupData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user && user.data && user.data.id) {
      const userId = user.data.id;

      fetch("http://localhost/CholoSave_Backend/api/view_my_groups.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load data in MyGroups component");
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === "success") {
            setGroupData(data.groups || []);
          } else {
            setError(data.message || "Failed to fetch groups.");
          }
        })
        .catch((err) => setError(err.message));
    }
  }, [user]);

  const filteredGroups = groupData.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="max-w-[1024px] mx-auto">
      <div>
        {/* Search */}
        <div className="flex justify-center gap-2 p-5">
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
            />
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <button className="bg-green-300 p-3 font-semibold rounded-lg hover:bg-green-700 hover:text-white">
              Search
            </button>
          </div>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-3">
          {filteredGroups.map((group) => (
            <MyGroupCard key={group.group_id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyGroups;
