import About from './aboutclient';

export const metadata = {
  title: "About Rajdoot | Authentic Indian, Western & Nepalese Cuisines",
  description: "Learn about Rajdoot, a multi-cuisine restaurant serving authentic Indian, Western and Nepalese cuisines with quality, tradition, and warm hospitality.",
  openGraph: {
    title: "About Rajdoot – Fine Indian, Western & Nepali Cuisine in Hong Kong",
    description: "Discover the story of Rajdoot restaurant, where we blend Indian spices, Western comfort foods, and Nepalese dishes to create an unforgettable dining experience in Hong Kong.",
    url: "https://rajdoot.info/about",
    siteName: "Rajdoot Restaurant",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rajdoot Restaurant Ambience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
};


export default function Page() {
  return <About />; 
}
