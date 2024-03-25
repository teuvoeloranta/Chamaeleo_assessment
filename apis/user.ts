import axios from 'axios';

export const getUsers = () => axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
export const getUser = (id: number) => axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
};
