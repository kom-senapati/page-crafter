export type Project = {
  id: string;
  title: string;
  description: string;
  templateId: string;
  data: any;
};

export const Projects: Project[] = [
  {
    id: "1",
    title: "Quizzy",
    description: "AI Powered Quiz App",
    templateId: "0",
    data: {
      hero: {
        title: "Awesome AI Quizzes",
        description:
          "Engage in thrilling AI-generated quizzes and test your knowledge.",
      },
      about: {
        title: "About Quizzy",
        description:
          "Quizzy offers a dynamic quiz experience powered by advanced AI, providing endless fun and learning opportunities.",
      },
    },
  },
  {
    id: "2",
    title: "Trivia Master",
    description: "AI Driven Trivia Game",
    templateId: "0",
    data: {
      hero: {
        title: "Ultimate AI Trivia",
        description: "Test your knowledge with the power of AI!",
      },
      about: {
        title: "Learn More",
        description:
          "Discover a new way of learning and testing your knowledge with Trivia Master. Our AI generates challenging and fun quizzes across a variety of topics.",
      },
    },
  },
  {
    id: "3",
    title: "Brain Busters",
    description: "Challenging Puzzles and Quizzes",
    templateId: "1",
    data: {
      hero: {
        title: "Mind-Bending Challenges",
        description:
          "Push your brain to its limits with our intricate puzzles and quizzes.",
      },
      about: {
        title: "About Brain Busters",
        description:
          "Brain Busters offers a collection of the most challenging puzzles and quizzes, designed to stimulate and entertain.",
      },
    },
  },
];
