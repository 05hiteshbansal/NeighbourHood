import Link from "next/link";
export const metadata = {
  title: "NeighbourHood",
  description: "NeighbourHood",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-row bg-[#FFFBF5]">
    <aside className="w-1/5 bg-white p-6 shadow-lg">
        <nav className="space-y-4 min-w-4">
          <Link href="/dashboard" className="block text-gray-700 font-semibold">
            People
          </Link>
          <Link href="/dashboard/feeds" className="block text-gray-500">
            Feeds
          </Link>
          <Link href="/dashboard/lost" className="block text-gray-500">
            Lost & Found
          </Link>
          <Link href="/dashboard/sell_and_buy" className="block text-gray-500">
            Sell & Buy
          </Link>
          <Link href="/dashboard/events" className="block text-gray-500">
            Local events
          </Link>
          <Link href="/dashboard/service" className="block text-gray-500">
            Services
          </Link>
        </nav>
      </aside>
      {children}
      </div>
     
  );
}
