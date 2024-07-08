// const BASE_URL = 'https://swapi.dev/api/starships/';

// const getResource = async (
//   url: string,
//   method = 'GET',
//   body = null,
//   headers = { 'Content-type': 'application/json' }
// ) => {
//   const res = await fetch(url, {});

//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }

//   return await res.json();
// };

interface StarshipProperties {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}
export type StarshipShortProperties = Pick<
  StarshipProperties,
  'name' | 'model' | 'manufacturer' | 'length' | 'consumables'
>;

export interface StarshipData {
  results: StarshipShortProperties[] | []
}

export class StarWarsService {
  private BASE_URL = 'https://swapi.dev/api/starships/';
  private method = 'GET';
  private body = null;
  private headers = { 'Content-type': 'application/json' };

  getResponse = async (searchParam: null | string = null) => {
    const url = searchParam
      ? `${this.BASE_URL}?search=${searchParam}`
      : this.BASE_URL;
    try {
      const response = await fetch(url, {
        method: this.method,
        body: this.body,
        headers: this.headers,
      });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = (await response.json()) as StarshipData;
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
