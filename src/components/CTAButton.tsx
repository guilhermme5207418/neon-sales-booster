
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
        "inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold rounded-full transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 animate-pulse shadow-lg shadow-green-500/30",
        size === "large" ? "px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl lg:text-2xl" : "px-6 py-3 md:px-8 md:py-4 text-base md:text-lg",
        className
      )}
    >
      🚀 QUERO MEU PACK AGORA!
    </a>
  );
};

export default CTAButton;
