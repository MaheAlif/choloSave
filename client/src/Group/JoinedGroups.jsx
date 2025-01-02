import {useState, useEffect} from "react";
import JoinedGroupCard from "./JoinedGroup/JoinedGroupCard";

const JoinedGroups = () => {
  const [groupData, setGroupData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("groupData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data in JoinedGroups component");
        }
        return response.json();
      })
      .then((data) => setGroupData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    console.log(groupData)
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
          {groupData.map((group, index) => (
            // console.log(group)
            <JoinedGroupCard key={group.id} group={group}></JoinedGroupCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinedGroups;
