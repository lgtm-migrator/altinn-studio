using System.IO;
using System.Threading.Tasks;
using Altinn.Studio.Designer.ViewModels.Response;

namespace Altinn.Studio.Designer.Services.Interfaces;

/// <summary>
/// Preview service
/// </summary>
public interface IPreviewService
{
    /// <summary>
    /// Checks if preview is running.
    /// </summary>
    /// <returns></returns>
    Task<PreviewStatus> IsPreviewRunning(string org, string app, string developer);

    /// <summary>
    /// Starts preview.
    /// </summary>
    Task StartPreview(string org, string app, string developer);

    /// <summary>
    /// Pushes change to preview service
    /// </summary>
    Task PushChanges(string org, string app, string developer);
}
