export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: (request, response) => {
            response.end("Rota de criação de tickets");
        }
    }
]