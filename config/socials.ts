export const SOCIAL_LINKS = {
  github: 'https://github.com/samkiva',
  linkedin: 'https://www.linkedin.com/in/samuel-kivairu',
  email: 'mailto:kivairusamuel9409@gmail.com',
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
