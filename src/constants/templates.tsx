export type Template = {
  id: number;
  title: string;
  description: string;
  generateJSXString: (data: any) => string;
};

export const templates: Template[] = [
  {
    id: 0,
    title: "Blue",
    description: "A minimal blue landing page with a hero section.",
    generateJSXString: (data) => `
      <div className="bg-gray-100 p-6">
        <section className="bg-blue-500 text-white p-4 rounded">
          <h1 className="text-3xl font-bold">${data.hero.title}</h1>
          <p className="mt-2">${data.hero.description}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold">${data.about.title}</h2>
          <p className="mt-2">${data.about.description}</p>
        </section>
      </div>`,
  },
  {
    id: 1,
    title: "Gray",
    description: "A minimal gray landing page with a hero section.",
    generateJSXString: (data) => `
      <div className="bg-gray-100 p-6">
        <section className="bg-gray-500 text-white p-4 rounded">
          <h1 className="text-3xl font-bold">${data.hero.title}</h1>
          <p className="mt-2">${data.hero.description}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold">${data.about.title}</h2>
          <p className="mt-2">${data.about.description}</p>
        </section>
      </div>`,
  },
];
