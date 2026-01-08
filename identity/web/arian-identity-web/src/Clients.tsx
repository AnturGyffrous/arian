import { useClients } from "./hooks/useClients";

export function Clients() {
    const { clients, loading, error } = useClients();

    var clientInfo;
    if (loading) {
        clientInfo = <div>Loading...</div>;
    }
    else if (error) {
        clientInfo = <div>Error: {error.message}</div>;
    }
    else {
        clientInfo = <ul>
            {clients.map(client => (
                <>
                    <li><b>client_id:</b> <code>{client.client_id}</code></li>
                    <li><b>client_secret:</b> <code>{client.client_secret}</code></li>
                    <li><b>scope:</b> <code>{client.scope}</code></li>
                    <li><b>redirect_uri:</b> <code>{client.redirect_uris}</code></li>
                </>
            ))}
        </ul>
    }

    return (
        <>
            <h2>Client information:</h2>
            {clientInfo}
        </>
    )
}
