export enum DefaultAIModel {
  "DALLE" = "DALLE",
  "Midjourney" = "Midjourney",
}

export const AiModelsList = [
  {
    logo: "/Midjourney_Emblem.png",
    name: DefaultAIModel.Midjourney,
  },
  {
    logo: "/openai.jpg",
    name: DefaultAIModel.DALLE,
  },
  {
    logo: null,
    name: "Others",
  },
];

export interface ImagePostModel {
  post_id?: number;
  user_id?: number;
  gallery_id?: number;
  title?: string;
  imageKey?: string;
  description?: string;
  creator_model?: DefaultAIModel | string;
  likesCount?: number;
  created_at?: Date;
  tags?: string[];
  isPrivate?: boolean;
  isNSFW?: boolean;
  category?: string;
}

export const ImageCategoryList = [
  "Characters",
  "Series",
  "Visual Novels",
  "Architecture",
  "Digital",
  "Photography",
  "Traditional",
  "Comic Books",
  "Graphic Novels",
  "Artists",
  "Celebrities",
  "Fictional Characters",
  "Models",
  "Other Figures",
  "Musicians",
  "Photographers",
  "Events",
  "Games",
  "Literature",
  "Movies",
  "Music",
  "Sports",
  "Television",
  "Clothing",
  "Colors",
  "Companies & Logos",
  "Food",
  "Technology",
  "Animals",
  "Landscapes",
  "Plants",
  "Cities",
  "Countries",
  "Space",
  "Aircraft",
  "Cars & Motorcycles",
  "Ships",
  "Spacecrafts",
  "Trains",
  "History",
  "Holidays",
  "Military & Weapons",
  "Quotes",
  "Religion",
  "Science",
].sort();
