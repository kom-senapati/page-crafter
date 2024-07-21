export type Template = {
  id: number;
  title: string;
  description: string;
  generateJSXString: (data: any) => string;
};

export const templates: Template[] = [
  {
    id: 0,
    title: "App Launch Landing Template",
    description: "Tailwind CSS template for app launches with a striking hero section, app showcase area, and an 'About' section for key features.",
    generateJSXString: (data) => `
      <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImage: "url('bg.svg')" }}>
      {/* Nav */}
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current text-indigo-600 pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
            </svg>
            APP
          </a>

          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
              </svg>
            </a>
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="#facebook_id"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container pt-10 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            ${data.hero.title}
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            ${data.hero.description}
          </p>

          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Download our app
          </p>
        </div>

        {/* Right Col */}
        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src="https://images.pexels.com/photos/2265484/pexels-photo-2265484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="App Showcase"
          />
        </div>

        {/* About Section */}
        <div className="w-full text-center py-32">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">${data.about.title}</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mx-auto px-4 md:px-0">${data.about.description}</p>
        </div>

        {/* Footer */}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">
            &copy; App 2019
          </a>
        </div>
      </div>
    </div>`,
  },
  {
    id: 1,
    title: "EnvisionAI",
    description: "A sleek, modern template with a captivating hero section and professional green themefor showcasing AI technologies.",
    generateJSXString: (data) => `
      <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">AI App</h1>
          <nav>
            <a href="#hero" className="px-4 hover:text-green-300">Home</a>
            <a href="#about" className="px-4 hover:text-green-300">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-green-100 text-gray-800 py-24 min-h-[60vh]"
        style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 w-[40%] py-4 mx-auto text-center px-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h2 className="text-4xl font-bold mb-4 text-white">${data.hero.title}</h2>
          <p className="text-xl mb-8 text-white">${data.hero.description}</p>
          <a href="#about" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 shadow-lg">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">${data.about.title}</h2>
          <p className="text-lg text-center">${data.about.description}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2024 AI App. All rights reserved.</p>
        </div>
      </footer>
    </div>`,
  },
];
