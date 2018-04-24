export interface Error {
  data: {
    message : string,
    code : string,
  },
  status : number
}

export interface UserInterface {
  email: string,
  password: string,
  name: string,
  surname: string,
  profilePic?: Array<string>,
  active?: boolean,
  createdAt?: Date
}
