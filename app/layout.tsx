import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies, headers } from "next/headers"; // 1. Import headers
import "./globals.css";
import apiClient from "@/lib/api/apiClient";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { AppProvider } from "@/context/AppContext";
import type { AppConfig } from "@/context/AppContext";
import AuthInitializer from "@/util/AuthInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetDo - Everything Your Dog Needs",
  description: "Premium quality products for your furry friends",
};

// 2. Accept host parameter and send it to your SaaS backend
async function getAppConfig(host: string): Promise<AppConfig> {
  try {
    const response = await apiClient.get(`/store/${host}`);
    console.log("Fetched store config:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to load store config, using fallback:", error);
    // Fallback default config if store is not found
    return {
      logo: "/default_logo.png",
      name: "Souq jo",
    };
  }
}

async function getMe(): Promise<any> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  try {
    const response = await apiClient.get("/auth/me", {
      headers: { Cookie: cookieHeader },
    });
    return response.data;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      try {
        const refreshResponse = await apiClient.post(
          "/auth/refresh",
          {},
          { headers: { Cookie: cookieHeader } },
        );

        const setCookie = refreshResponse.headers["set-cookie"];
        if (!setCookie) return null;

        const newCookieHeader = setCookie
          .map((c: string) => c.split(";")[0])
          .join("; ");

        const retryResponse = await apiClient.get("/auth/me", {
          headers: {
            Cookie: `${cookieHeader}; ${newCookieHeader}`,
          },
        });
        return retryResponse.data;
      } catch (refreshError) {
        return null;
      }
    }
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 3. Read the incoming request headers to get the domain
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  console.log("Current host:", host);

  // 4. Fetch configuration specific to this tenant/store
  const appConfig = await getAppConfig(host);
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
