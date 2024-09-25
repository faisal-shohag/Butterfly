import { auth } from "@/auth";
const Middleware = async () => {
  const session = await auth();
  return (
    <main className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className="text-3xl">Middleware page</h1>
      <p className="text-lg">{session?.user?.email}</p>
    </main>
  );
};

export default Middleware;