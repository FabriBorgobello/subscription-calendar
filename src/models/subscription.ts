export interface Subscription {
  id: string;
  name: string;
  description: string;
  logo: string;
  billingDate: number;
}

export const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "netflix",
    name: "Netflix",
    description: "Watch movies and TV shows online",
    logo: "/logos/netflix.svg",
    billingDate: 1,
  },
  {
    id: "spotify",
    name: "Spotify",
    description: "Listen to music and podcasts",
    logo: "/logos/spotify.svg",
    billingDate: 15,
  },
  {
    id: "amazon-prime",
    name: "Amazon Prime",
    description: "Watch movies and TV shows online",
    logo: "/logos/amazon-prime.svg",
    billingDate: 27,
  },
  {
    id: "disney-plus",
    name: "Disney+",
    description: "Watch movies and TV shows online",
    logo: "/logos/disney-plus.svg",
    billingDate: 12,
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    description: "Watch movies and TV shows online",
    logo: "/logos/hbo-max.svg",
    billingDate: 5,
  },
  {
    id: "apple-music",
    name: "Apple Music",
    description: "Listen to music and podcasts",
    logo: "/logos/apple.svg",
    billingDate: 21,
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    description: "Watch ad-free videos",
    logo: "/logos/youtube.svg",
    billingDate: 17,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Find a job with LinkedIn",
    logo: "/logos/linkedin.svg",
    billingDate: 4,
  },
  {
    id: "google-one",
    name: "Google One",
    description: "Get more storage for your Google Account",
    logo: "/logos/google-one.svg",
    billingDate: 21,
  },
];
