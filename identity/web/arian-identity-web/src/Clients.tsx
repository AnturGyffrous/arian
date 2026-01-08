import { Client } from "./Client";
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
        clientInfo = clients.map(client => (
            <Client key={client.client_id} {...client} />
        ));
    }

    return (
        <>
            <h2>Client information:</h2>
            {clientInfo}
        </>
    )
}
