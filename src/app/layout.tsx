import type { Metadata } from "next";
import "../../css/globals.css";
import "../../css/dataurls.css";
import Layout from "./(components)/_layout";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My online CV and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
