const videos = [
  {
    src: "/videos/gemstone-video-1.mov",
    title: "Gemstone in Motion",
    desc: "Watch the light dance through this exquisite specimen",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-24 md:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-cream/60 mb-4">
            Living Brilliance
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Videos
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.title} className="group relative overflow-hidden rounded-sm">
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="font-display text-base md:text-lg text-cream">{video.title}</h3>
                <p className="font-accent text-sm text-cream/60">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
