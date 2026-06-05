import {randomUUID} from 'node:crypto';

export function create ({request, response}) {
    const {equipament, description, username} = request.body;


    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        username,
        status: 'open',
        created_at: new Date(),
        up_dated_at: new Date(),
    }

    return response.end(JSON.stringify(ticket));
}