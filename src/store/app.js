import create from "zustand";

import { mountStoreDevtool } from "simple-zustand-devtools";

import { FILTER_TYPES } from "./../helpers/const";

const [useStore] = create((set) => ({
  onlineRadioStations: [
    {
      id: 1,
      name: `Radio Record`,
      streamUrl: `https://radiorecord.hostingradio.ru/rr_main96.aacp`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 2,
      name: `Megamix`,
      streamUrl: `https://radiorecord.hostingradio.ru/mix96.aacp`,
      genres: [`All`, `Special`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 3,
      name: `Record Deep`,
      streamUrl: `https://radiorecord.hostingradio.ru/deep96.aacp`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    // {
    //   id: 4,
    //   name: `Record Club`,
    //   streamUrl: `http://air.radiorecord.ru:805/club_128`,
    //   genres: [`All`, `House`],
    //   isPlaying: false,
    //   isFavorite: false,
    // },
    {
      id: 5,
      name: `Future House`,
      streamUrl: `https://radiorecord.hostingradio.ru/fut96.aacp`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: `Trancemission`,
      streamUrl: `https://radiorecord.hostingradio.ru/tm96.aacp`,
      genres: [`All`, `Trance`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 7,
      name: `Record Chill-Out`,
      streamUrl: `https://radiorecord.hostingradio.ru/chil96.aacp`,
      genres: [`All`, `Chill`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 8,
      name: `Minimal Tech`,
      streamUrl: `https://radiorecord.hostingradio.ru/mini96.aacp`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 9,
      name: `Pirate Station`,
      streamUrl: `https://radiorecord.hostingradio.ru/ps96.aacp`,
      genres: [`All`, `Drum`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 10,
      name: `Russian Mix`,
      streamUrl: `https://radiorecord.hostingradio.ru/rus96.aacp`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 11,
      name: `Vip House`,
      streamUrl: `https://radiorecord.hostingradio.ru/vip96.aacp`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 12,
      name: `Superdisco 90th`,
      streamUrl: `https://radiorecord.hostingradio.ru/sd9096.aacp`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 13,
      name: `Record Breaks`,
      streamUrl: `https://radiorecord.hostingradio.ru/brks96.aacp`,
      genres: [`All`, `Break`, `Bass`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 14,
      name: `Record Dubstep`,
      streamUrl: `https://radiorecord.hostingradio.ru/dub96.aacp`,
      genres: [`All`, `Bass`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 15,
      name: `Record Dancecore`,
      streamUrl: `https://radiorecord.hostingradio.ru/dc96.aacp`,
      genres: [`All`, `Oldschool`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 16,
      name: `Record Techno`,
      streamUrl: `https://radiorecord.hostingradio.ru/techno96.aacp`,
      genres: [`All`, `Hard`, `Techno`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 17,
      name: `Record Hardstyle`,
      streamUrl: `https://radiorecord.hostingradio.ru/teo96.aacp`,
      genres: [`All`, `Hard`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 18,
      name: `Record Trap`,
      streamUrl: `https://radiorecord.hostingradio.ru/trap96.aacp`,
      genres: [`All`, `Bass`, `Rap/Urban`],
      isPlaying: false,
      isFavorite: false,
    },
    // {
    //   id: 19,
    //   name: `Pump`,
    //   streamUrl: `http://air.radiorecord.ru:805/pump_128`,
    //   genres: [`All`],
    //   isPlaying: false,
    //   isFavorite: false,
    // },
    {
      id: 20,
      name: `Record Rock`,
      streamUrl: `https://radiorecord.hostingradio.ru/rock96.aacp`,
      genres: [`All`, `Special`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 21,
      name: `Medlyak FM`,
      streamUrl: `https://radiorecord.hostingradio.ru/mdl96.aacp`,
      genres: [`All`, `Pop`, `Special`, `Chill`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 22,
      name: `Gop FM`,
      streamUrl: `https://radiorecord.hostingradio.ru/gop96.aacp`,
      genres: [`All`, `Pop`, `Special`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 23,
      name: `Yo! FM`,
      streamUrl: `https://radiorecord.hostingradio.ru/rap96.aacp`,
      genres: [`All`, `Rap/Urban`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 24,
      name: `Rave FM`,
      streamUrl: `https://radiorecord.hostingradio.ru/rave96.aacp`,
      genres: [`All`, `Oldschool`, `Special`],
      isPlaying: false,
      isFavorite: false,
    },
  ],

  activeIndex: null,
  stationToPlay: [],
  filterType: FILTER_TYPES.ALL_STATIONS,
  isPlayButtonClick: false,

  setStationToPlay: (id) =>
    set((state) => ({
      ...state,
      stationToPlay: state.onlineRadioStations.filter((station) => station.id === id),
    })),

  addToFavorite: (id) =>
    set((state) => ({
      ...state,
      onlineRadioStations: state.onlineRadioStations.map((station) => {
        if (station.id === id) {
          return {
            ...station,
            isFavorite: !station.isFavorite,
          };
        }
        return station;
      }),
    })),

  setLocalStorage: () =>
    set((state) => {
      localStorage.setItem("favoriteStations", JSON.stringify(state.onlineRadioStations));
    }),

  getFromLocalStorage: () =>
    set((state) => {
      const getLocalStorageStatus = (data) => {
        if (localStorage.getItem("favoriteStations") === null) {
          return data;
        } else {
          return JSON.parse(localStorage.getItem("favoriteStations"));
        }
      };

      return {
        ...state,
        onlineRadioStations: getLocalStorageStatus(state.onlineRadioStations),
      };
    }),

  setActiveIndex: (index) => set((state) => ({ ...state, activeIndex: index })),

  getFilterType: (filterType) => set((state) => ({ ...state, filterType: filterType })),

  setIsPlayButtonClick: (isPlayButtonClick) => set((state) => ({ ...state, isPlayButtonClick: isPlayButtonClick })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}

export default useStore;
