import { client } from "./http-helpers";

export const registerAttendance = (surname) => {
    return client.post('registration', { surname }).then(response => response.data);
}