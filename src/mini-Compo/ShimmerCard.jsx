import React from 'react';

function ShimmerCard() {
  return (
    <div className="bg-white p-4 relative overflow-hidden rounded-md animate-pulse">
      
      {/* Heart & Bag buttons */}
      <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
        <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-shimmer" />
        <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-shimmer" />
      </div>

      {/* Image Placeholder */}
      <div className="h-44 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4 rounded animate-shimmer" />

      {/* Brand Name */}
      <div className="h-3 w-1/3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-2 rounded animate-shimmer" />

      {/* Title */}
      <div className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-1 rounded animate-shimmer" />
      <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4 rounded animate-shimmer" />

      {/* Price */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer" />
        <div className="h-4 w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer" />
        <div className="h-3 w-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3">
        <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-shimmer" />
        <div className="h-3 w-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer" />
      </div>

    </div>
  );
}

export default ShimmerCard;
