export type ProjectData = {
  hero: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  templateId: string;
  data: ProjectData;
};
