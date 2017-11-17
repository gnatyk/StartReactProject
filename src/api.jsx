import { http } from './utils/http';

export function sayHi() {
    return http.get(`/`);
}