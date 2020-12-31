import icons from './constants/icons';
import images from './constants/images';

export const destination = [
  {
    id: 0,
    name: 'Ski Villa',
    img: images.ski_villa,
  },
  {
    id: 1,
    name: 'Climbing Hills',
    img: images.climbing,
  },
  {
    id: 2,
    name: 'Frozen Hills',
    img: images.frozen_hill,
  },
  {
    id: 3,
    name: 'Beach',
    img: images.beach,
  },
];

export const iconButton = [
  {
    icon: icons.airplane,
    bgColor: ['#46aeff', '#5884ff'],
    label: 'Flight',
  },
  {
    icon: icons.train,
    bgColor: ['#fddf90', '#fcda13'],
    label: 'Train',
  },
  {
    icon: icons.bus,
    bgColor: ['#e973ad', '#da5df2'],
    label: 'Bus',
  },
  {
    icon: icons.taxi,
    bgColor: ['#fcaba8', '#fe6bba'],
    label: 'Taxi',
  },
  {
    icon: icons.bed,
    bgColor: ['#ffc465', '#ff9c5f'],
    label: 'Hotel',
  },
  {
    icon: icons.eat,
    bgColor: ['#7cf1fb', '#4ebefd'],
    label: 'Foods',
  },
  {
    icon: icons.compass,
    bgColor: ['#7be993', '#46caaf'],
    label: 'Adventure',
  },
  {
    icon: icons.event,
    bgColor: ['#fca397', '#fc7b6c'],
    label: 'Event',
  },
];

export const detailDestination = {
  baner: images.ski_villa_banner,
  image: images.ski_villa,
  title: 'Ski Villa',
  location: 'France',
  caption:
    'Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world',
  info: [
    {icon: icons.villa, labal: 'Villa'},
    {icon: icons.parking, labal: 'Parking'},
    {icon: icons.wind, labal: 'Wind'},
  ],
  desc:
    'Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.',
  price: 1000,
};
