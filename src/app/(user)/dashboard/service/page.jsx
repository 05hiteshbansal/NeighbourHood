import Services from "@/components/posts/services"; 
import { currentUser } from "@clerk/nextjs/server";
export default async function page() {
  const user=await currentUser();
  const email=user.emailAddresses[0].emailAddress
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Services email={email} />
    </div>
  );
}
