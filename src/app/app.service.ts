import { Injectable } from '@angular/core';
import {ColorInfo, SergalPaletteInfo} from './app.component';

const SERGAL_DATA: SergalPaletteInfo[] = [
  {
    name: 'Pure Northern',
    type: 'pure-northern',
    eyeColors: [],
    coatColors: [
      {
        id: 0,
        color: '#000032',
        rare: false
      },
      {
        id: 1,
        color: '#374760',
        rare: false
      },
      {
        id: 2,
        color: '#6a7b82',
        rare: false
      },
      {
        id: 3,
        color: '#97b5ad',
        rare: false
      },
      {
        id: 4,
        color: '#a5a486',
        rare: false
      },
      {
        id: 5,
        color: '#6b787e',
        rare: false
      },
      {
        id: 6,
        color: '#849197',
        rare: false
      },
      {
        id: 7,
        color: '#868f98',
        rare: false
      },
      {
        id: 8,
        color: '#adc1bf',
        rare: false
      },
      {
        id: 9,
        color: '#b0b39e',
        rare: false
      },
      {
        id: 10,
        color: '#959da0',
        rare: false
      },
      {
        id: 11,
        color: '#b1b8bc',
        rare: false
      },
      {
        id: 12,
        color: '#9ea2ab',
        rare: false
      },
      {
        id: 13,
        color: '#becbcc',
        rare: false
      },
      {
        id: 14,
        color: '#dce4e7',
        rare: false
      },
    ],
    bellyColors: [
      {
        id: 110,
        color: '#ffffff',
        rare: false
      },
      {
        id: 111,
        color: '#e3e6e6',
        rare: false
      },
      {
        id: 112,
        color: '#cbcece',
        rare: false
      },
    ]
  },
  {
    name: 'Civilized Northern',
    type: 'civilized-northern',
    eyeColors: [],
    coatColors: [
      {
        id: 15,
        color: '#000032',
        rare: false
      },
      {
        id: 16,
        color: '#374760',
        rare: false
      },
      {
        id: 17,
        color: '#6a7b82',
        rare: false
      },
      {
        id: 18,
        color: '#97b5ad',
        rare: false
      },
      {
        id: 19,
        color: '#a5a486',
        rare: false
      },
      {
        id: 20,
        color: '#29115a',
        rare: false
      },
      {
        id: 21,
        color: '#53567f',
        rare: false
      },
      {
        id: 22,
        color: '#838b9a',
        rare: false
      },
      {
        id: 23,
        color: '#a9c1c3',
        rare: false
      },
      {
        id: 24,
        color: '#adb69a',
        rare: false
      },
      {
        id: 25,
        color: '#542d68',
        rare: false
      },
      {
        id: 26,
        color: '#72698b',
        rare: false
      },
      {
        id: 27,
        color: '#9394a5',
        rare: false
      },
      {
        id: 28,
        color: '#b6c1c9',
        rare: false
      },
      {
        id: 29,
        color: '#b0bda9',
        rare: false
      },
      {
        id: 30,
        color: '#683ca4',
        rare: false
      },
      {
        id: 31,
        color: '#0a6f6b',
        rare: false
      },
      {
        id: 32,
        color: '#4b97ab',
        rare: false
      },
      {
        id: 33,
        color: '#a3aece',
        rare: false
      },
      {
        id: 34,
        color: '#bccdde',
        rare: false
      },
    ],
    bellyColors: [
      {
        id: 110,
        color: '#ffffff',
        rare: false
      },
      {
        id: 111,
        color: '#e3e6e6',
        rare: false
      },
      {
        id: 112,
        color: '#cbcece',
        rare: false
      },
    ]
  },
  {
    name: 'Western',
    type: 'western',
    eyeColors: [],
    coatColors: [
      {
        id: 35,
        color: '#20adb3',
        rare: false
      },
      {
        id: 36,
        color: '#105a65',
        rare: false
      },
      {
        id: 37,
        color: '#253d75',
        rare: false
      },
      {
        id: 38,
        color: '#2654b5',
        rare: false
      },
      {
        id: 39,
        color: '#683ca4',
        rare: false
      },
      {
        id: 40,
        color: '#30d688',
        rare: false
      },
      {
        id: 41,
        color: '#197955',
        rare: false
      },
      {
        id: 42,
        color: '#4b97ab',
        rare: false
      },
      {
        id: 43,
        color: '#6cdaf1',
        rare: false
      },
      {
        id: 44,
        color: '#7872e8',
        rare: false
      },
      {
        id: 45,
        color: '#8dc574',
        rare: false
      },
      {
        id: 46,
        color: '#80b045',
        rare: false
      },
      {
        id: 47,
        color: '#aac55b',
        rare: false
      },
      {
        id: 48,
        color: '#e4ecb5',
        rare: false
      },
      {
        id: 49,
        color: '#f9fde1',
        rare: false
      },
      {
        id: 50,
        color: '#983ca4',
        rare: false
      },
      {
        id: 51,
        color: '#9e62d7',
        rare: false
      },
      {
        id: 52,
        color: '#a97ec2',
        rare: false
      },
      {
        id: 53,
        color: '#ceb7ee',
        rare: false
      },
      {
        id: 54,
        color: '#f4e1fd',
        rare: false
      },
    ],
    bellyColors: [
      {
        id: 110,
        color: '#ffffff',
        rare: false
      },
      {
        id: 111,
        color: '#e3e6e6',
        rare: false
      },
      {
        id: 112,
        color: '#cbcece',
        rare: false
      },
    ]
  },
  {
    name: 'Eastern',
    type: 'eastern',
    eyeColors: [],
    coatColors: [
      {
        id: 55,
        color: '#12210f',
        rare: false
      },
      {
        id: 56,
        color: '#191919',
        rare: false
      },
      {
        id: 57,
        color: '#0c0414',
        rare: false
      },
      {
        id: 58,
        color: '#131128',
        rare: false
      },
      {
        id: 59,
        color: '#3d1d18',
        rare: false
      },
      {
        id: 60,
        color: '#374c33',
        rare: false
      },
      {
        id: 61,
        color: '#403d43',
        rare: false
      },
      {
        id: 62,
        color: '#2f223e',
        rare: false
      },
      {
        id: 63,
        color: '#393652',
        rare: false
      },
      {
        id: 64,
        color: '#63411c',
        rare: false
      },
      {
        id: 65,
        color: '#515151',
        rare: false
      },
      {
        id: 66,
        color: '#444345',
        rare: false
      },
      {
        id: 67,
        color: '#3e3a43',
        rare: false
      },
      {
        id: 68,
        color: '#4e4e56',
        rare: false
      },
      {
        id: 69,
        color: '#51473d',
        rare: false
      },
      //Rare Colors
      {
        id: 70,
        color: '#c9d92b',
        rare: true
      },
      {
        id: 71,
        color: '#9cab3a',
        rare: true
      },
      {
        id: 72,
        color: '#7d7a4f',
        rare: true
      },
      {
        id: 73,
        color: '#d9c52b',
        rare: true
      },
      {
        id: 74,
        color: '#bd9237',
        rare: true
      },
    ],
    bellyColors: [
      {
        id: 110,
        color: '#ffffff',
        rare: false
      },
      {
        id: 111,
        color: '#e3e6e6',
        rare: false
      },
      {
        id: 112,
        color: '#cbcece',
        rare: false
      },
    ]
  },
  {
    name: 'Pure Southern',
    type: 'pure-southern',
    eyeColors: [],
    coatColors: [
      {
        id: 75,
        color: '#2f1705',
        rare: false
      },
      {
        id: 76,
        color: '#472308',
        rare: false
      },
      {
        id: 77,
        color: '#63300a',
        rare: false
      },
      {
        id: 78,
        color: '#6d4221',
        rare: false
      },
      {
        id: 79,
        color: '#805c41',
        rare: false
      },
      {
        id: 80,
        color: '#532413',
        rare: false
      },
      {
        id: 81,
        color: '#6b3421',
        rare: false
      },
      {
        id: 82,
        color: '#7c4330',
        rare: false
      },
      {
        id: 83,
        color: '#913c2b',
        rare: false
      },
      {
        id: 84,
        color: '#a75741',
        rare: false
      },
      {
        id: 85,
        color: '#876a2a',
        rare: false
      },
      {
        id: 86,
        color: '#9d8242',
        rare: false
      },
      {
        id: 87,
        color: '#a59161',
        rare: false
      },
      {
        id: 88,
        color: '#b09e78',
        rare: false
      },
      {
        id: 89,
        color: '#bbab8a',
        rare: false
      },
    ],
    bellyColors: [
      {
        id: 113,
        color: '#fbf8f0',
        rare: false
      },
      {
        id: 114,
        color: '#fdf5cf',
        rare: false
      },
      {
        id: 115,
        color: '#e1ddc6',
        rare: false
      },
      {
        id: 116,
        color: '#cec69d',
        rare: false
      },
    ]
  },
  {
    name: 'Civilized Southern',
    type: 'civilized-southern',
    eyeColors: [],
    coatColors: [
      {
        id: 90,
        color: '#682426',
        rare: false
      },
      {
        id: 91,
        color: '#ac403d',
        rare: false
      },
      {
        id: 92,
        color: '#d69787',
        rare: false
      },
      {
        id: 93,
        color: '#ceac78',
        rare: false
      },
      {
        id: 94,
        color: '#e0d0bc',
        rare: false
      },
      {
        id: 95,
        color: '#471408',
        rare: false
      },
      {
        id: 96,
        color: '#9e3713',
        rare: false
      },
      {
        id: 97,
        color: '#dfae3f',
        rare: false
      },
      {
        id: 98,
        color: '#e6ce7e',
        rare: false
      },
      {
        id: 99,
        color: '#f1e8b7',
        rare: false
      },
      {
        id: 100,
        color: '#7a6d22',
        rare: false
      },
      {
        id: 101,
        color: '#8d9036',
        rare: false
      },
      {
        id: 102,
        color: '#bfc221',
        rare: false
      },
      {
        id: 103,
        color: '#f0e435',
        rare: false
      },
      {
        id: 104,
        color: '#fffaac',
        rare: false
      },
      {
        id: 105,
        color: '#a68635',
        rare: false
      },
      {
        id: 106,
        color: '#d9b028',
        rare: false
      },
      {
        id: 107,
        color: '#ffe23b',
        rare: false
      },
      {
        id: 108,
        color: '#f1f35c',
        rare: false
      },
      {
        id: 109,
        color: '#fff5d4',
        rare: false
      },
    ],
    bellyColors: [
      {
        id: 113,
        color: '#fbf8f0',
        rare: false
      },
      {
        id: 114,
        color: '#fdf5cf',
        rare: false
      },
      {
        id: 115,
        color: '#e1ddc6',
        rare: false
      },
      {
        id: 116,
        color: '#cec69d',
        rare: false
      },
    ]
  }
];

@Injectable()
export class AppService {
  public selectedCoat: ColorInfo;
  public selectedBelly: ColorInfo;

  constructor() { }

  public getSergalList(): SergalPaletteInfo[] { return SERGAL_DATA; }
  public getSergal(type: string): SergalPaletteInfo {
    return SERGAL_DATA.find(sergal => sergal.type === type);
  }

}
