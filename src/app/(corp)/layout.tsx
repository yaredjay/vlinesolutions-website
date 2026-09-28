import { Cursor } from "@/components/ui/Cursor";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Cursor />
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
