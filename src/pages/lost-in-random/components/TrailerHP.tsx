function TrailerHP() {
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <h4 className="text-white text-center text-3xl mb-6 lg:text-[40px]">
        Guarda il trailer
      </h4>
      <div className=" px-[8%] w-full max-w-7xl">
        <iframe
          src="https://www.youtube.com/embed/QnaGgvi5Dig"
          title="trailer"
          className=" w-full aspect-video "></iframe>
      </div>
    </div>
  );
}

export default TrailerHP;
