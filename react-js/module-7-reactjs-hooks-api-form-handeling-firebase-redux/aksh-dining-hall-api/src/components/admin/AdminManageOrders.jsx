import React from 'react'

export default function AdminManageOrders() {
  return (
    <>
    <div className="bg-white rounded-[32px] p-6 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h3 className="heading-font text-4xl text-[#6c1118]">Recent Orders</h3>
      <button className="bg-[#7c151b] text-white px-5 py-3 rounded-xl">
        View All
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-4">Customer</th>
            <th className="pb-4">Dish</th>
            <th className="pb-4">Amount</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          <tr className="hover:bg-gray-50 transition">
            <td className="py-5">Rahul Mehta</td>
            <td className="py-5">Royal Gujarati</td>
            <td className="py-5">₹450</td>
            <td className="py-5">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                Completed
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-5">Priya Kapoor</td>
            <td className="py-5">Punjabi Deluxe</td>
            <td className="py-5">₹620</td>
            <td className="py-5">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
                Pending
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-5">Anand Shah</td>
            <td className="py-5">Fusion Oriental</td>
            <td className="py-5">₹520</td>
            <td className="py-5">
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                Preparing
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}
