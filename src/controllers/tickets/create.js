import {randomUUID} from 'node:crypto';

export function create ({request, response, database}) {
    const { equipament, description, username } = request.body ?? {};

    if (!equipament || !description || !username) {
        return response
            .writeHead(400)
            .end(JSON.stringify({ message: 'Campos obrigatorios: equipament, description, username.' }));
    }


    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        username,
        status: 'open',
        created_at: new Date(),
        up_dated_at: new Date(),
    }

    database.insert('tickets', ticket);

    return response.writeHead(201).end(JSON.stringify(ticket));
}