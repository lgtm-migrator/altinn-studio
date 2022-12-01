using System.Threading.Tasks;
using Altinn.Studio.Designer.Services.Interfaces;
using Altinn.Studio.Designer.TypedHttpClients.PreviewService;
using Altinn.Studio.Designer.ViewModels.Response;

namespace Altinn.Studio.Designer.Services.Implementation;

/// <inheritdoc />
public class PreviewService: IPreviewService
{
    private readonly IPreviewServiceClient _client;
    private readonly IRepository _repository;

    /// <summary>
    /// Ctor.
    /// </summary>
    public PreviewService(IRepository repository, IPreviewServiceClient client)
    {
        _repository = repository;
        _client = client;
    }

    /// <inheritdoc />
    public Task<PreviewStatus> IsPreviewRunning(string org, string app, string developer)
    {
        return _client.GetStatus(org, app, developer);
    }

    /// <inheritdoc />
    public async Task StartPreview(string org, string app, string developer)
    {
        await _client.Start(org, app, developer);
    }

    /// <inheritdoc />
    public async Task PushChanges(string org, string app, string developer)
    {
        var layouts = _repository.GetJsonFormLayouts(org, app);
        await _client.Put(org, app, developer, "", layouts);
    }
}
