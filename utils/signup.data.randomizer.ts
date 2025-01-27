import { randUserName, randEmail, randPassword, randFirstName, randLastName, randAddress, randState, randCity, randZipCode, randPhoneNumber } from "@ngneat/falso"

interface SignUpData {
    username: string;
    email: string;
    password: string | unknown;
    firstName: string;
    lastName: string;
    address: string | unknown;
    state: string;
    city: string;
    zipcode: string;
    phoneNumber: string;
}

export const signUpData: SignUpData = {
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