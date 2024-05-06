import { auth, currentUser } from "@clerk/nextjs/server";
import Header from "../components/header";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return <div>You are not logged in!</div>;
  }

  const user = await currentUser();

  return (
    <>
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 mb-24">
        <div className="flex">
          <div>Welcome back, {user?.fullName}!</div>
        </div>
      </section>
    </>
  );
}
