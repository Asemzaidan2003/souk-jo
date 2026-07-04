import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import apiClient from "@/lib/api/apiClient";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { AppProvider } from "@/context/AppContext";
import type { AppConfig } from "@/context/AppContext";
import AuthInitializer from "@/components/AuthInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetDo - Everything Your Dog Needs",
  description: "Premium quality products for your furry friends",
};

async function getAppConfig(): Promise<AppConfig> {
  // مؤقتًا – بعدين من API
  return {
    logo: "/default_logo.png",
    name: "Souq jo",
  };
}
async function getMe(): Promise<any> {
  try{
    const response = await apiClient.get('/auth/me')
    return response.data;
  }
  catch(error){
    console.log('Error fetching user data:', error);
    return null;
  }
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appConfig = await getAppConfig();
  const user = await getMe();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider value={appConfig}>
          <AuthInitializer user={user} />
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
