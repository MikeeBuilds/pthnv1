import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center py-10">Dashboard</h1>

      <div className="w-full max-w-4xl p-4">
        {/* User Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-500">User Information</h2>
          <p className="text-lg">Display user information here</p>
        </div>

        {/* Token Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-500">Token Information</h2>
          <p className="text-lg">Display token information here</p>
        </div>

        {/* Token Price Chart */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-500">Token Price Chart</h2>
          <p className="text-lg">Display token price chart here</p>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-500">Transaction History</h2>
          <p className="text-lg">Display transaction history here</p>
        </div>

        {/* Mint/Burn Functions */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-500">Mint/Burn Tokens</h2>
          <p className="text-lg">Display mint/burn functions here</p>
        </div>
      </div>

      <div className="text-center py-10">
        <Link href="/">
          <div className="cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
