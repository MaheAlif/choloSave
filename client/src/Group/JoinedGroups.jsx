import { useState, useEffect, useContext } from "react";
import { userContext } from "../Provider/ContextProvider";
import JoinedGroupCard from "./JoinedGroup/JoinedGroupCard";

const JoinedGroup = () => {
  const [groupData, setGroupData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search
  const { user } = useContext(userContext);

  useEffect(() => {
    if (!user?.data?.id) {
      setError("User not logged in.");
      return;
    }

    fetch("http://localhost/CholoSave_Backend/api/get_groups.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.data.id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch groups");
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
      .catch((err) => {
        setError(err.message || "Something went wrong.");
      });
  }, [user]);

  const filteredGroups = groupData.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-[1024px] mx-auto">
      {/* Search Bar */}
      <div className="flex justify-center gap-2 p-5">
        <input
          className="input input-bordered join-item"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
        />
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        <button className="bg-green-300 p-3 font-semibold rounded-lg hover:bg-green-700 hover:text-white">
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Groups */}
      <div className="flex flex-col gap-3">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <JoinedGroupCard key={group.group_id} group={group} />
          ))
        ) : (
          <p className="text-center text-gray-600">No groups available.</p>
        )}
      </div>
    </section>
  );
};

export default JoinedGroup;
