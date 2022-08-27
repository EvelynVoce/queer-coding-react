import { client } from "./http-helpers";

export const registerAttendance = (forename, surname, age) => {
    return client.post('registration', { forename, surname, age }).then(response => response.data);
}