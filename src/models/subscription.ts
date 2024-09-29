export interface Subscription {
  name: string;
  description: string;
  logo: string;
  billingDate: number;
}

export const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    name: "Netflix",
    description: "Watch movies and TV shows online",
    logo: "/logos/netflix.svg",
    billingDate: 1,
  },
  {
    name: "Spotify",
    description: "Listen to music and podcasts",
    logo: "/logos/spotify.svg",
    billingDate: 15,
  },
  {
    name: "Amazon Prime",
    description: "Watch movies and TV shows online",
    logo: "/logos/amazon-prime.svg",
    billingDate: 27,
  },
  {
    name: "Disney+",
    description: "Watch movies and TV shows online",
    logo: "/logos/disney-plus.svg",
    billingDate: 12,
  },
  {
    name: "HBO Max",
    description: "Watch movies and TV shows online",
    logo: "/logos/hbo-max.svg",
    billingDate: 5,
  },
  {
    name: "Apple Music",
    description: "Listen to music and podcasts",
    logo: "/logos/apple.svg",
    billingDate: 21,
  },
  {
    name: "YouTube Premium",
    description: "Watch ad-free videos",
    logo: "/logos/youtube.svg",
    billingDate: 17,
  },
  {
    name: "LinkedIn",
    description: "Find a job with LinkedIn",
    logo: "/logos/linkedin.svg",
    billingDate: 4,
  },
  {
    name: "Google One",
    description: "Get more storage for your Google Account",
    logo: "/logos/google-one.svg",
    billingDate: 21,
  },
];
