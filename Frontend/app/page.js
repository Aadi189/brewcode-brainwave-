import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Navbar } from "@/components/home/navbar";
import LayoutTextFlipDemo from "@/components/home/heroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        {/* <div className="h-40 flex items-center justify-center">
          <TextHoverEffect text="OnFinance" />
        </div> */}
        <LayoutTextFlipDemo />
      </div>
    </div>
  );
}
