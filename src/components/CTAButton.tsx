
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  size?: "default" | "large";
  className?: string;
}

const CTAButton = ({ size = "default", className }: CTAButtonProps) => {
  const buyUrl = "https://pay.kiwify.com.br/u0rSqn4?utm_source=organicjLj6836f8808389a36f8805c9bc&utm_campaign=&utm_medium=&utm_content=&utm_term=&subid=organicjLj6836f8808389a36f8805c9bc&sid2=&subid2=&subid3=&subid4=&subid5=&xcod=organicjLj6836f8808389a36f8805c9bchQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=organicjLj6836f8808389a36f8805c9bchQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR";

  return (
    <a
      href={buyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold rounded-full transition-all duration-300 ease-out hover:scale-102 hover:shadow-lg hover:shadow-green-500/25 animate-pulse-soft",
        size === "large" ? "px-12 py-6 text-xl md:text-2xl" : "px-8 py-4 text-lg",
        className
      )}
    >
      🚀 QUERO MEU PACK AGORA!
    </a>
  );
};

export default CTAButton;
