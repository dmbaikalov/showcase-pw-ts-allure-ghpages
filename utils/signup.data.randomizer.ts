import { randUserName, randEmail, randPassword, randFirstName, randLastName, randAddress, randState, randCity, randZipCode, randPhoneNumber } from "@ngneat/falso"

export const signUpData: string[] = {
    username: randUserName(),
    email: randEmail(),
    password: randPassword(),
    firstName: randFirstName(),
    lastName: randLastName(),
    address: randAddress(),
    state: randState(),
    city: randCity(),
    zipcode: randZipCode(),
    phoneNumber: randPhoneNumber()
}