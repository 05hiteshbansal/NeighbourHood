import React from 'react';
import Image from 'next/image';

const Card = ({ userid, bio, postimage, userimage, title ,name }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-full">
      {/* User Information */}
      <div className="flex items-center mb-4">
        <Image
          src={userimage}
          alt="User avatar"
          className="w-12 h-12 rounded-full mr-4"
          width={48}  // Adjusted width and height to match tailwind classes
          height={48}
        />
        <div>
          <h3 className="text-lg text-black font-semibold">{name}</h3>
        </div>
      </div>

      {/* Post Content */}
      <div>
          <h3 className="text-lg text-black font-semibold">{title}</h3>
        </div>
      <p className="text-gray-800 mb-4">{bio}</p>

      {/* Post Image */}
      {postimage && (
        <Image
          src={postimage}
          alt="Post content"
          width={600}  // Updated size for better quality
          height={400}
          className="w-full rounded-lg mb-4"
        />
      )}
    </div>
  );
};

export default Card;
