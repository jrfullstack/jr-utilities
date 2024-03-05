import { TopMenu } from "@/components";

export default function MainLayout({children}: {children: React.ReactNode;}) {

  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
}