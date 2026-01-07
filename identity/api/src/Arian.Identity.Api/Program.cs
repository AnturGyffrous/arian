using Arian.Identity.Api;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var clientDictionary = new Dictionary<string, Client>
{
    {
        "oauth-client-1",
        new Client
        {
            ClientId = "oauth-client-1",
            ClientSecret = "oauth-client-secret-1",
            RedirectUris = new List<string> { "http://localhost:9000/callback" }
        }
    }
};

app.MapGet("/clients", () => clientDictionary.Values);

app.Run();
