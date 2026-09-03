export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface GeocodedLocation
  extends Coordinates {
  formattedAddress?: string;
  district?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}
