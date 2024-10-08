import { categories, CourseCategory } from "./categories";

export interface Course {
    id: number;
    category: CourseCategory;
    rate: number;
    title: string;
    duration: string;
  }
  
  export const courses = [
    {
      id: 1,
      category: categories[2],
      rate: "4.5",
      title: "Les fonctions trigonométriques",
      duraton: "30 min"
    },

    {
        id: 1,
        category: categories[1],
        rate: "4.5",
        title: "Les fonctions trigonométriques",
        duraton: "2h 15min"
      },
      {
        id: 1,
        category: categories[2],
        rate: "4.5",
        title: "Les fonctions trigonométriques",
        duraton: "30 min"
      },
  
      {
          id: 1,
          category: categories[1],
          rate: "4.5",
          title: "Les fonctions trigonométriques",
          duraton: "2h 15min"
        },
        {
            id: 1,
            category: categories[2],
            rate: "4.5",
            title: "Les fonctions trigonométriques",
            duraton: "30 min"
          },
      
          {
              id: 1,
              category: categories[1],
              rate: "4.5",
              title: "Les fonctions trigonométriques",
              duraton: "2h 15min"
            },
    
  ];
  
