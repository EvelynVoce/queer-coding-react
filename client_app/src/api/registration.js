import { client } from "./http-helpers";

export const registerAttendance = (forename, surname, age, gender, sexuality, course) => {
    return client.post('registration', { forename, surname, age, gender, sexuality, course }).then(response => response.data);
}