export interface Language {
  name: string;
  level: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  bio: string;
  languages: Language[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Venture {
  id: string;
  name: string;
  description: string;
  status: string;
  year: string;
  category: string;
  image: string;
  url?: string;
}

export interface Social {
  linkedin: string;
  tiktok: string;
  instagram: string;
  facebook: string;
}

export interface Content {
  personal: Personal;
  services: Service[];
  ventures: Venture[];
  social: Social;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}