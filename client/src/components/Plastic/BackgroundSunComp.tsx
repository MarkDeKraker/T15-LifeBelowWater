const BackgroundSunComp = ({ bg }: { bg: string }) => {
  return (
    <div className="col-start-6 fixed top-[40%] left-[45%] items-center justify-center h-screen z-10">
        <div
          id={"background_sun"}
          className={`w-48 h-24 ${bg} rounded-tl-full rounded-tr-full blur-md z-10`}
        />
      </div>
  );
};

export default BackgroundSunComp;