using System.Text.Json.Serialization;

namespace Arian.Identity.Api;

public class Client
{
    [JsonPropertyName("client_id")]
    public required string ClientId { get; set; }
    
    [JsonPropertyName("client_secret")]
    public required string ClientSecret { get; set; }
    
    [JsonPropertyName("redirect_uris")]
    public required List<string> RedirectUris { get; set; }
}