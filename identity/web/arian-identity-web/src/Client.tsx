import type { Client } from "./hooks/useClients";

export function Client(client: Client) {
    return (
        <ul>
            <li><b>client_id:</b> <code>{client.client_id}</code></li>
            <li><b>client_secret:</b> <code>{client.client_secret}</code></li>
            <li><b>scope:</b> <code>{client.scope}</code></li>
            <li><b>redirect_uri:</b> <code>{client.redirect_uris.join(", ")}</code></li>
        </ul>
    );
}
