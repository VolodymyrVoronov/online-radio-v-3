import create from "zustand";

import { mountStoreDevtool } from "simple-zustand-devtools";

import { FILTER_TYPES } from "./../helpers/const";

const [useStore] = create((set) => ({
  onlineRadioStations: [
    {
      id: 1,
      name: `Radio Record`,
      streamUrl: `http://air.radiorecord.ru:805/rr_128`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 2,
      name: `Megamix`,
      streamUrl: `http://air.radiorecord.ru:805/mix_128`,
      genres: [`All`, `Special`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 3,
      name: `Record Deep`,
      streamUrl: `http://air.radiorecord.ru:805/deep_128`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 4,
      name: `Record Club`,
      streamUrl: `http://air.radiorecord.ru:805/club_128`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 5,
      name: `Future House`,
      streamUrl: `http://air.radiorecord.ru:805/fut_128`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: `Trancemission`,
      streamUrl: `http://air.radiorecord.ru:805/tm_128`,
      genres: [`All`, `Trance`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 7,
      name: `Record Chill-Out`,
      streamUrl: `http://air.radiorecord.ru:805/chil_128`,
      genres: [`All`, `Chill`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 8,
      name: `Minimal Tech`,
      streamUrl: `http://air.radiorecord.ru:805/mini_128`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 9,
      name: `Pirate Station`,
      streamUrl: `http://air.radiorecord.ru:805/ps_128`,
      genres: [`All`, `Drum`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 10,
      name: `Russian Mix`,
      streamUrl: `http://air.radiorecord.ru:805/rus_128`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 11,
      name: `Vip House`,
      streamUrl: `http://air.radiorecord.ru:805/vip_128`,
      genres: [`All`, `House`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 12,
      name: `Superdisco 90th`,
      streamUrl: `http://air.radiorecord.ru:805/sd90_128`,
      genres: [`All`, `Pop`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 13,
      name: `Record Breaks`,
      streamUrl: `http://air.radiorecord.ru:805/brks_128`,
      genres: [`All`, `Break`, `Bass`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 14,
      name: `Record Dubstep`,
      streamUrl: `http://air.radiorecord.ru:805/dub_128`,
      genres: [`All`, `Bass`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 15,
      name: `Record Dancecore`,
      streamUrl: `http://air.radiorecord.ru:805/dc_128`,
      genres: [`All`, `Oldschool`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 16,
      name: `Record Techno`,
      streamUrl: `http://air.radiorecord.ru:805/techno_128`,
      genres: [`All`, `Hard`, `Techno`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 17,
      name: `Record Hardstyle`,
      streamUrl: `http://air.radiorecord.ru:805/teo_128`,
      genres: [`All`, `Hard`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 18,
      name: `Record Trap`,
      streamUrl: `http://air.radiorecord.ru:805/trap_128`,
      genres: [`All`, `Bass`, `Rap/Urban`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 19,
      name: `Pump`,
      streamUrl: `http://air.radiorecord.ru:805/pump_128`,
      genres: [`All`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 20,
      name: `Record Rock`,
      streamUrl: `http://air.radiorecord.ru:805/rock_128`,
      genres: [`All`, `Special`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 21,
      name: `Medlyak FM`,
      streamUrl: `http://air.radiorecord.ru:805/mdl_128`,
      genres: [`All`, `Pop`, `Special`, `Chill`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 22,
      name: `Gop FM`,
      streamUrl: `http://air.radiorecord.ru:805/gop_128`,
      genres: [`All`, `Pop`, `Special`, `Russian`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 23,
      name: `Yo! FM`,
      streamUrl: `http://air.radiorecord.ru:805/yo_128`,
      genres: [`All`, `Rap/Urban`],
      isPlaying: false,
      isFavorite: false,
    },
    {
      id: 24,
      name: `Rave FM`,
      streamUrl: `http://air.radiorecord.ru:805/rave_128`,
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
      stationToPlay: state.onlineRadioStations.filter(
        (station) => station.id === id
      ),
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
      localStorage.setItem(
        "favoriteStations",
        JSON.stringify(state.onlineRadioStations)
      );
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

  getFilterType: (filterType) =>
    set((state) => ({ ...state, filterType: filterType })),

  setIsPlayButtonClick: (isPlayButtonClick) =>
    set((state) => ({ ...state, isPlayButtonClick: isPlayButtonClick })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}

export default useStore;
