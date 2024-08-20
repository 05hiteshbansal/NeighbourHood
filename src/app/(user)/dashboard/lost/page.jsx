import Feeds from "@/components/posts/feeds"; 
import { currentUser } from "@clerk/nextjs/server";
import LostFound from "@/components/posts/lostFound";
export default async function page() {
  const user=await currentUser();
  const email=user.emailAddresses[0].emailAddress
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <LostFound email={email} />
    </div>
  );
}