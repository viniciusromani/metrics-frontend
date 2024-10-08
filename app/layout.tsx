import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../public/logo.svg";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { CustomTabsTrigger as TabsTrigger } from "@/components/custom/TabsTrigger";
import { CustomTabsContent as TabsContent } from "@/components/custom/TabsContent";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lezana",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="flex justify-center p-6 bg-primary rounded-b-lg">
          <Image src={logo} alt="Logo" width={80} />
        </header>
        <main>
          <Tabs className="m-4" defaultValue="producao">
            <TabsList className="flex justify-evenly">
              <TabsTrigger value="producao">Produção</TabsTrigger>
              <TabsTrigger value="furacao">Furação</TabsTrigger>
              <TabsTrigger value="montagem">Montagem</TabsTrigger>
              <TabsTrigger value="embalagem">Embalagem</TabsTrigger>
            </TabsList>
            <TabsContent value="producao">Produção</TabsContent>
            <TabsContent value="furacao">Furação</TabsContent>
            <TabsContent value="montagem">Montagem</TabsContent>
            <TabsContent value="embalagem">Embalagem</TabsContent>
          </Tabs>
        </main>
      </body>
    </html>
  );
}
