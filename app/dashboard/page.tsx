import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";

const DashboardPage = async () => {
  const session = await auth();

  return <div>{session?.user && <LogoutButton />}</div>;
};

export default DashboardPage;
