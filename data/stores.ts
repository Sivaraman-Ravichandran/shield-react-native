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
    name: 'Safe Zone',
    imageUrl: 'https://images4.alphacoders.com/869/869425.jpg',
    latitude: 10.939006,
    longitude: 76.951952,
    description: 'College Entry Gate',
  },
  {
    id: '2',
    name: 'Police Station Locator',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/674/159/desktop-wallpaper-night-aesthetic-dekstop-at-street-aesthetic.jpg',
    latitude: 10.938845,
    longitude: 76.951142,
    description: 'B14 Kuniamuthur Police Station.',
  },

  // Add more store entries as needed
];
