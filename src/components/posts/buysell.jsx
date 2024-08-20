"use client";
import { useState } from 'react';
import axios from 'axios';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Card from './Card';
const BuySell = ({email}) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/BuySell`,
        {email }
      );
      console.log(data);
      setData([...data.data.users]);
    };
    fetchData();
  }, [email]);

  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-6 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="flex-grow lg:w-2/3">
        {data.map((d, index) => (
          <div key={index} className="mb-6">
            <Card
              userid={d.userid}
              bio={d.bio}
              postimage={d.eventImage}
              userimage={d.userImage}
              title={d.title}
              name={d.name}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default BuySell;
