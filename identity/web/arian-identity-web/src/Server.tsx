export function Server() {
    const url = window.location.toString();
    const authorizationEndpoint = new URL("authorize", url);
    const tokenEndpoint = new URL("token", url);
    return (
        <>
        <h2>Server information:</h2>
        <ul>
            <li><b>authorization_endpoint:</b> <code>{authorizationEndpoint.toString()}</code></li>
			<li><b>token_endpoint:</b> <code>{tokenEndpoint.toString()}</code></li>
        </ul>
        </>
    )
}