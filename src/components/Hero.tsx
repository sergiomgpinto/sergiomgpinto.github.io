import {HeroNetwork} from "@/components/ui/hero_nn.tsx";

export const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full h-full">
        <HeroNetwork/>
      </div>
    </section>
  );
};