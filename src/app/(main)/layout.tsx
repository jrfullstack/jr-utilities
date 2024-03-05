'use client'

import { useEffect, useState } from "react";
import { Footer, RadioActiveLoader, TopMenu } from "@/components";

export default function MainLayout({children}: {children: React.ReactNode;}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const fetchData = async () => {      
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="main-container">
        <TopMenu />

        {isLoading ? (
          <RadioActiveLoader isLoading={isLoading} />
        ) : (
          // <>
          <div>{children}</div>
          // </>
        )}
      </main>
      <Footer />
    </>
  );
}