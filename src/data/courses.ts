import { style } from "@angular/animations";
import { categories, CourseCategory } from "./categories";

export interface Course {
    id: number;
    category: CourseCategory;
    rate: number;
    title: string;
    duration: string;
    style: string;
  }
  
  export const courses = [
    {
      id: 1,
      category: categories[1],
      rate: "4.5",
      title: "Les fonctions trigonométriques",
      duraton: "30 min",
      style: "bg-green"
    },

    {
        id: 1,
        category: categories[2],
        rate: "5",
        title: "Les base de la dynamique",
        duraton: "2h 15min",
        style: "bg-red",
      },
      {
        id: 1,
        category: categories[3],
        rate: "4.7",
        title: "L'activité cardiaque",
        duraton: "1h 30min",
        style: "bg-orange",
      },
  
      {
          id: 1,
          category: categories[4],
          rate: "3.5",
          title: "Les courants littéraires",
          duraton: "2h",
          style: "bg-purple",
        },
        {
            id: 1,
            category: categories[2],
            rate: "5",
            title: "Gravitation universelle",
            duraton: "20 min",
            style: "bg-red",
          },
          
      
          {
              id: 1,
              category: categories[5],
              rate: "4",
              title: "La seconde guerre mondiale",
              duraton: "1h 20min",
              style: "bg-green",
            },
    
  ];
  
