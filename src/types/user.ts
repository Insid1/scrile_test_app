interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: number,
    lng: number
  }
}
interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

interface IUser {
  id: number | string,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}

export type { IUser };
