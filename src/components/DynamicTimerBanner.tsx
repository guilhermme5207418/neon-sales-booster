
const DynamicTimerBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 animate-pulse">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm md:text-base font-bold">
          ⏰ OFERTA POR TEMPO LIMITADO - Preço pode subir a qualquer momento!
        </span>
      </div>
    </div>
  );
};

export default DynamicTimerBanner;
