export interface CurrentlyBuilding {
  title: string;
  description: string;
  category: string;
  status: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'X' | 'Portfolio';
  url: string;
  handle?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}
