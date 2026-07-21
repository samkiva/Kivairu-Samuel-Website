export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/yourhandle',
  github: 'https://github.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourhandle',
  email: 'hello@hexsentinel.com',
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
