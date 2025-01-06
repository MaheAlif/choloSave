import React from "react";
import DashCharts from "./InsideDashboard/DashCharts";
import DashCard from "./InsideDashboard/DashCard";
import DashCard2 from "./InsideDashboard/DashCard2";
import { useParams } from "react-router";
import DashboardSidebar from "./DashboardSidebar";

const GroupDashboard = () => {
  const { id } = useParams(); // Get the group ID from the URL

  // Simulated data
  const groupData = [
    {
      id: 5,
      name: "Goal Settlers",
      description:
        "Our goal is to raise $10,000 in 30 days, with funds allocated to. Backers will receive tiered rewards, such as early access or exclusive merchandise.",
      installments: 500,
      scheme: "Weekly",
      members: "32/50",
      image:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f383cda8-0c5c-4579-9606-0df72fcb9aee/1085f340-bfeb-424e-a9d5-723d1f63d29b.png",
      data: [
        { name: "Jan", cash: 400 },
        { name: "Feb", cash: 220 },
        { name: "Mar", cash: 350 },
        { name: "Apr", cash: 270 },
        { name: "May", cash: 310 },
        { name: "Jun", cash: 360 },
        { name: "Jul", cash: 300 },
        { name: "Aug", cash: 520 },
        { name: "Sep", cash: 380 },
        { name: "Oct", cash: 260 },
        { name: "Nov", cash: 330 },
        { name: "Dec", cash: 410 },
      ],
    },
    {
      id: 8,
      name: "Goal Not Settlers",
      description: "Our goal is to raise $15,000 in 20 days. Join us for an impactful journey.",
      installments: 700,
      scheme: "Bi-Weekly",
      members: "28/40",
      image:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f383cda8-0c5c-4579-9606-0df72fcb9aee/1085f340-bfeb-424e-a9d5-723d1f63d29b.png",
      data: [
        { name: "Jan", cash: 100 },
        { name: "Feb", cash: 320 },
        { name: "Mar", cash: 550 },
        { name: "Apr", cash: 370 },
        { name: "May", cash: 210 },
        { name: "Jun", cash: 460 },
        { name: "Jul", cash: 100 },
        { name: "Aug", cash: 320 },
        { name: "Sep", cash: 580 },
        { name: "Oct", cash: 260 },
        { name: "Nov", cash: 230 },
        { name: "Dec", cash: 410 },
      ],
    },
    {
      id: 3,
      name: "Adventure Seekers",
      description:
        "Join our group to explore adventures and share exciting stories together.",
      installments: 300,
      scheme: "Monthly",
      members: "45/60",
      image:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f383cda8-0c5c-4579-9606-0df72fcb9aee/1085f340-bfeb-424e-a9d5-723d1f63d29b.png",
      data: [
        { name: "Jan", cash: 420 },
        { name: "Feb", cash: 320 },
        { name: "Mar", cash: 350 },
        { name: "Apr", cash: 410 },
        { name: "May", cash: 310 },
        { name: "Jun", cash: 300 },
        { name: "Jul", cash: 110 },
        { name: "Aug", cash: 450 },
        { name: "Sep", cash: 380 },
        { name: "Oct", cash: 260 },
        { name: "Nov", cash: 380 },
        { name: "Dec", cash: 490 },
      ],
    },
  ];

  // Find the group that matches the "id" from the URL
  const matchedGroup = groupData.find((group) => group.id === parseInt(id));

  if (!matchedGroup) {
    return <div className="text-center">Group not found.</div>;
  }

  return (
    <>
      <div className="flex bg-gray-200">
        {/* Sidebar / Aside Menu */}
        <DashboardSidebar></DashboardSidebar>

        {/* Main Content */}
        <main className="flex flex-col gap-5 w-full p-6">
          <h1 className="text-center text-3xl font-bold mb-1">{matchedGroup.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example Cards */}
            <DashCard></DashCard>
            <DashCard2></DashCard2>
          </div>
          <div className="flex border-cyan-500 p-2 lg:p-4 bg-slate-50 rounded-lg shadow-xl">
            <div className="w-6/12">
              <h1 className="text-xl font-bold">Cash flow</h1>
              <DashCharts data={matchedGroup.data}></DashCharts>
              {console.log(matchedGroup.data)}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GroupDashboard;
