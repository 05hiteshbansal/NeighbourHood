import Feeds from "@/components/posts/feeds"; 
import { currentUser } from "@clerk/nextjs/server";
import Events from "@/components/posts/events";
export default async function page() {
  const user=await currentUser();
  const email=user.emailAddresses[0].emailAddress
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Events email={email} />
    </div>
  );
}
