export interface Playlists {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    height: number | null;
    url: string;
    width: number | null;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    url: string;
  };
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
    items: {
      track: Track;
    }[];
  };
  type: string;
  uri: string;
}

export interface Track {
  album: Albums;
  artists: {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  id: string | null;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
  duration_ms: number;
  explicit: boolean;
  is_local: boolean;
  disc_number: number;
}

// Assuming you have a variable with the problematic type

export interface Albums {
  album_type: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
[];

export interface Artis {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null | string;
    total: number;
  };
  genres: [];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SearchResult {
  albums: {
    items: Albums[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  artists: {
    items: Artis[];
  };
  playlists: {
    items: Playlists[];
  };
  tracks: {
    items: Track[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  [key: string]:
    | {
        items: any[]; // Adjust the type accordingly
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
      }
    | { items: Artis[] }
    | { items: Playlists[] };
}

export interface CategoryList {
  href: string;
  icons: [
    {
      url: string;
      height: number | null;
      width: number | null;
    }
  ];
  id: string;
  name: string;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: false;
    filter_locked: false;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: 0;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
}

export interface Category {
  message: string;
  playlists: {
    href: string;
    items: Playlists[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number | null;
  };
}
export interface ArrowSlide {
  onClick: () => void;
}

export interface AxiosErrorResponse {
  response?: {
    data?: {
      error?: {
        message?: string;
        status?: number;
      };
    };
  };
}
