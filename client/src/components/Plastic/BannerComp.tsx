const BannerComp = ({ source, alt, children }: { source: string, alt: string, children?: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full z-20">
      <img
        className="h-full w-screen object-cover top-0 left-0 z-20"
        src={source}
        alt={alt}
      />
      {children && <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:text-8xl sm:text-7xl drop-shadow-2xl font-semibold font-custom mb-10 z-30">{children}</div>}
    </div>
  );
};

export default BannerComp;