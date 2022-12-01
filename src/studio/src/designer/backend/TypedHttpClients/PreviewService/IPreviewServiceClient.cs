using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Altinn.Studio.Designer.ViewModels.Response;

namespace Altinn.Studio.Designer.TypedHttpClients.PreviewService;

/// <summary>
/// HttpClient for preview service
/// </summary>
public interface IPreviewServiceClient
{
    /// <summary>
    /// Performs http call and deserialize response to given type
    /// </summary>
    Task<PreviewStatus> GetStatus(string org, string app, string developer);

    /// <summary>
    /// put
    /// </summary>
    Task Put(string org, string app, string developer, string path, string file);

    /// <summary>
    /// put
    /// </summary>
    Task Start(string org, string app, string developer);
}
