'use client'

import { useEffect, useState } from "react";
import { RadioActiveLoader, TopMenu } from "@/components";

export default function MainLayout({children}: {children: React.ReactNode;}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const fetchData = async () => {      
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <TopMenu />

      {isLoading ? (
        <RadioActiveLoader isLoading={isLoading} />
      ) : (
        // <>
        <div>{children}</div>
        // </>
      )}

      {/* {children} */}
    </main>
  );
}