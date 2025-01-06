import React, { useContext, useState } from "react";
import { userContext } from "../Provider/ContextProvider";

const CreateGroup = () => {
  const {user} = useContext(userContext);
  console.log(user.data.id)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Group Info
    groupName: "",
    groupDetails: "",
    memberCount: "",

    // Plan Details
    dpsType: "",
    timePeriod: "",
    amount: "",
    startTime: "",

    // Payment Methods
    bkashNumber: "",
    nagadNumber: "",
    rocketNumber: "",

    // Regulations
    goal: "",
    rules: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Group Information
            </h2>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group name</span>
                </label>
                <input
                  type="text"
                  name="groupName"
                  value={formData.groupName}
                  onChange={handleInputChange}
                  placeholder="group name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group details</span>
                </label>
                <input
                  type="text"
                  name="groupDetails"
                  value={formData.groupDetails}
                  onChange={handleInputChange}
                  placeholder="give the details about this group"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group member</span>
                </label>
                <input
                  type="number"
                  name="memberCount"
                  value={formData.memberCount}
                  onChange={handleInputChange}
                  placeholder="set how many members can join"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Plan details
            </h2>
            <div className="card-body">
              {/* DPS type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">DPS type</span>
                </label>
                <input
                  type="text"
                  name="dpsType" // Added name attribute
                  placeholder="DPS type"
                  value={formData.dpsType}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Time period */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time period</span>
                </label>
                <input
                  type="number"
                  name="timePeriod" // Added name attribute
                  placeholder="enter a number"
                  value={formData.timePeriod}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Amount to invest */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input
                  type="number"
                  name="amount" // Added name attribute
                  placeholder="set how much can be invested"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Start time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Start time</span>
                </label>
                <input
                  type="date"
                  name="startTime" // Added name attribute
                  placeholder="set start time"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Payment methods
            </h2>
            <div className="card-body">
              {/* Bkash */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bkash number</span>
                </label>
                <input
                  type="number"
                  name="bkashNumber"
                  placeholder="bkash"
                  value={formData.bkashNumber}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Nagad */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nagad number</span>
                </label>
                <input
                  type="number"
                  name="nagadNumber"
                  placeholder="nagad"
                  value={formData.nagadNumber}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Rocket  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rocket number</span>
                </label>
                <input
                  type="number"
                  name="rocketNumber"
                  placeholder="rocket"
                  value={formData.rocketNumber}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Regulations
            </h2>
            <div className="card-body">
              {/* Goal */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Goal</span>
                </label>
                <input
                  type="text"
                  name="goal"
                  placeholder="state your goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>

              {/* Rules */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Warning time</span>
                </label>
                <input
                  type="number"
                  name="warning_time"
                  placeholder="Enter your warning time"
                  value={formData.warning_time}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>
              {/* emergency time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">emergency fund</span>
                </label>
                <input
                  type="number"
                  name="emergency_fund"
                  placeholder="Enter your warning time"
                  value={formData.emergency_fund}
                  onChange={handleInputChange}
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      group_name: formData.groupName,
      group_admin_id: user.data.id, // Replace with the actual logged-in admin ID
      dps_type: formData.dpsType,
      time_period: Number(formData.timePeriod),
      amount: Number(formData.amount),
      start_date: formData.startTime,
      goal_amount: Number(formData.amount) * Number(formData.timePeriod), // Calculated goal amount
      warning_time: (formData.warning_time) ,// Example value
      emergency_fund: formData.emergency_fund, // Example value
      bKash: formData.bkashNumber,
      Rocket: formData.rocketNumber || null,
      Nagad: formData.nagadNumber || null,
      created_at: new Date().toISOString().split("T")[0], // Current date
      description: formData.groupDetails,
      members: Number(formData.memberCount),
    };
    console.log(postData);

    try {
      const response = await fetch(
        "http://localhost/CholoSave_Backend/api/create_group.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies for session validation
          body: JSON.stringify(postData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Group created successfully!");
        console.log("API Response:", result);
      } else {
        alert(`Failed to create group: ${result.message}`);
        console.error("API Error:", result);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("A network error occurred. Please try again.");
    }
  };

  return (
    <section className="border-4 border-green-500 bg-slate-100 m-2 p-2 flex flex-col max-w-[1024px] mx-auto">
      <div>
        <h1 className="text-2xl lg:text-5xl p-2 lg:p-5 font-bold text-green-500 text-center">
          Group Creation
        </h1>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`w-24 h-2 mx-1 rounded ${
              stepNumber <= step ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleFormSubmit} className="p-2">
        {renderStepContent()}

        <div className="flex justify-between mt-6 px-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-300 px-6 py-2 rounded-xl shadow-lg font-semibold hover:bg-gray-400"
            >
              Previous
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-green-300 px-6 py-2 rounded-xl shadow-lg font-semibold hover:bg-green-400 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 px-6 py-2 rounded-xl shadow-lg font-semibold text-white hover:bg-green-600 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default CreateGroup;
