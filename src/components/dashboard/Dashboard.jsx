"use client";
import { useState } from 'react';
import ProfileCard from '@/components/dashboard/Card';
import DashboardPagination from '@/components/dashboard/Pagination';
import axios from 'axios';
import React, { useEffect } from 'react';
import Link from 'next/link';

const Dashboard = ({ log, lat, email }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/dashboard`,
        { log, lat, email }
      );
      console.log(data);
      setData([...data.data.users]);
    };
    fetchData();
  }, [log, lat, email]);

  console.log(data);

  return (
    <div className="bg-[#FFFBF5] min-h-screen flex w-full ">
      {/* Sidebar */}
      {/* Main Content */}
      <div className=' flex-1 p-10'>
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Nearest Neighbourhood</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for people, events..."
              className="px-4 py-2 rounded-lg border border-gray-300"
            />
            {/* <div className="bg-gray-200 p-2 rounded-full">
              <img src="/path-to-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div> */}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((d, index) => (
            <Link
              href={`/dashboard/people/${d._id}`}
              key={index}
              className="bg-[#F8F6E3] p-2 rounded-lg shadow-lg"
            >
              <ProfileCard
                name={d.name}
                bio={d.bio}
                imgurl={d.imageurl}
                distance={d.distance}
              />
            </Link>
          ))}
        </section>

        {/* <div className="mt-10">
          <DashboardPagination />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
