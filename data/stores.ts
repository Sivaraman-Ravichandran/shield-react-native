export interface StoreData {
  id: string;
  name: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  description: string;
}

export const storesData: readonly StoreData[] = [
  {
    id: '1',
    name: 'Gandhipuram',
    imageUrl: 'https://images4.alphacoders.com/869/869425.jpg',
    latitude: 11.0168,
    longitude: 76.9558,
    description:
      'Located in the heart of Coimbatore, Gandhipuram is a bustling commercial area.',
  },
  {
    id: '2',
    name: 'RS Puram',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/674/159/desktop-wallpaper-night-aesthetic-dekstop-at-street-aesthetic.jpg',
    latitude: 11.0076,
    longitude: 76.9661,
    description:
      'A well-known upscale residential area with many shopping and dining options.',
  },
  {
    id: '3',
    name: 'Saibaba Colony',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/847/1017/desktop-wallpaper-in-some-districts-urban-anime-life-live-wall.jpg',
    latitude: 11.0284,
    longitude: 76.9458,
    description:
      'A peaceful residential area with several small shops and eateries.',
  },
  {
    id: '4',
    name: 'Peelamedu',
    imageUrl:
      'https://images.wallpapersden.com/image/download/night-in-neon-city_bWhmZWyUmZqaraWkpJRmZWdprWpsaw.jpg',
    latitude: 11.027,
    longitude: 77.02,
    description:
      'An area near the Coimbatore International Airport, known for educational institutions and shopping centers.',
  },
  {
    id: '5',
    name: 'Avinashi Road',
    imageUrl:
      'https://img.freepik.com/premium-photo/night-city-neon-lights-metropolis-reflection-neon-lights-water-modern-city-with-highrise-buildings-night-street-scene-city-ocean-3d-illustration_129911-3475.jpg',
    latitude: 11.0243,
    longitude: 77.0018,
    description:
      'A major arterial road in Coimbatore lined with corporate offices, hospitals, and retail outlets.',
  },
  // Add more store entries as needed
];
