export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-10 gap-8">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-xl md:text-6xl font-bold">
          <h1 className="inline">
            Craft{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Stunning
            </span>{" "}
            landing pages
          </h1>{" "}
          <h2 className="inline">
            with{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              AI
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Page Crafter uses AI to help you build professional landing pages
          quickly and easily.
        </p>
      </div>

      <div className="z-10 flex justify-center">
        <img src="./LandingPage/hero.jpg" alt="hero" className="max-w-[90%]" />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
}
