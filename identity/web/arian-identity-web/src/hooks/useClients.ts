import { useState, useEffect } from "react";

export interface Client {
    client_id: string;
    client_secret: string;
    scope: string;
    redirect_uris: string[];
}

export function useClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5211/clients");
                if (!response.ok) {
                    throw new Error(`Failed to fetch clients: ${response.statusText}`);
                }
                const data = await response.json();
                setClients(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Unknown error"));
                setClients([]);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    return { clients, loading, error };
}
