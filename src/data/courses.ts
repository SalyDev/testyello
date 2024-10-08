import { style } from "@angular/animations";
import { categories, CourseCategory } from "./categories";

export interface Course {
    id: number;
    category: CourseCategory;
    rate: string;
    title: string;
    duration: string;
    description: string;
    style: string;
  }
  
  export const courses = [
    {
      id: 1,
      category: categories[1],
      rate: "4.5",
      title: "Les fonctions trigonométriques",
      duraton: "30 min",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
      style: "bg-green"
    },

    {
        id: 2,
        category: categories[2],
        rate: "5",
        title: "Les base de la dynamique",
        duraton: "2h 15min",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
        style: "bg-red",
      },
      {
        id: 3,
        category: categories[3],
        rate: "4.7",
        title: "L'activité cardiaque",
        duraton: "1h 30min",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
        style: "bg-orange",
      },
  
      {
          id: 4,
          category: categories[4],
          rate: "3.5",
          title: "Les courants littéraires",
          duraton: "2h",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
          style: "bg-purple",
        },
        {
            id: 5,
            category: categories[2],
            rate: "5",
            title: "Gravitation universelle",
            duraton: "20 min",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
            style: "bg-red",
          },
          
      
          {
              id: 6,
              category: categories[5],
              rate: "4",
              title: "La seconde guerre mondiale",
              duraton: "1h 20min",
              description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, aut. Et officiis ea fugiat, dignissimos enim dolorem facilis sequi esse velit quasi voluptas quisquam laudantium alias laborum quas architecto accusantium beatae ipsam perspiciatis saepe laboriosam. Consectetur recusandae minus perspiciatis voluptatum iusto beatae velit? Necessitatibus facilis molestiae recusandae magni incidunt quidem.",
              style: "bg-green",
            },
    
  ];
  
