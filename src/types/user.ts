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
  phone: string,
  username: string,
  email: string,
  address: IAddress,
  name: string,
  website: string,
  company: ICompany
}

export type { IUser };
