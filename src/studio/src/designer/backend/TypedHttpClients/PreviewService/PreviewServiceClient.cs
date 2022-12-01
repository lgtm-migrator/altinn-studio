using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Json;
using System.Net.Mime;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Altinn.Studio.Designer.Configuration;
using Altinn.Studio.Designer.ViewModels.Request;
using Altinn.Studio.Designer.ViewModels.Response;

namespace Altinn.Studio.Designer.TypedHttpClients.PreviewService;

/// <inheritdoc />
public class PreviewServiceClient: IPreviewServiceClient
{
    private readonly HttpClient _client;

    /// <summary>
    /// Ctor
    /// </summary>
    public PreviewServiceClient(HttpClient client, PreviewServiceConfiguration options)
    {
        _client = client;
        _client.BaseAddress = new Uri(options.BaseUrl);
    }

    /// <inheritdoc />
    public async Task<PreviewStatus> GetStatus(string org, string app, string developer)
    {
        var response = await _client.GetAsync($"preview/status/{developer}/{org}/{app}");
        return await response.Content.ReadAsAsync<PreviewStatus>();
    }

    /// <inheritdoc />
    public async Task Put(string org, string app, string developer, string path, string file)
    {
        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(file);
        var request = new PreviewPushRequest
        {
            Path = path,
            Content = System.Convert.ToBase64String(plainTextBytes)
        };
        HttpContent content = new StringContent(JsonSerializer.Serialize(request), Encoding.UTF8, MediaTypeNames.Application.Json)
        await _client.PutAsync($"preview/deployment/{developer}/{org}/{app}", content);
    }

    /// <inheritdoc />
    public async Task Start(string org, string app, string developer)
    {
        var request = new HttpRequestMessage(HttpMethod.Post, $"preview/deployment/{developer}/{org}/{app}");
        await _client.SendAsync(request);
    }
}
