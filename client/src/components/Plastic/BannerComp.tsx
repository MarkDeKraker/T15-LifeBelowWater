const BannerComp = ({ source, alt }: { source: string, alt: string }) => {
  return (
    <img
        className="col-start-2 col-end-11 relative z-20"
        src={source}
        alt={alt}
      />
  );
};

export default BannerComp;