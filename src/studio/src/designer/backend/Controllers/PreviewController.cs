using System.Threading.Tasks;
using Altinn.Studio.Designer.Helpers;
using Altinn.Studio.Designer.Services.Interfaces;
using Altinn.Studio.Designer.ViewModels.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Yuniql.Extensibility;

namespace Altinn.Studio.Designer.Controllers;

/// <summary>
/// Preview controller
/// </summary>
[AutoValidateAntiforgeryToken]
[Route("designer/api/{org}/{repo}/preview")]
public class PreviewController: ControllerBase
{
    private readonly IPreviewService _previewService;

    /// <summary>
    /// Ctor.
    /// </summary>
    public PreviewController(IPreviewService previewService)
    {
        _previewService = previewService;
    }

    /// <summary>
    /// Proxy to preview service
    /// </summary>
    /// <returns></returns>
    [HttpGet("status")]
    public async Task<PreviewStatus> IsPreviewRunning(string org, string repository)
    {
        return await _previewService.IsPreviewRunning(org, repository, Developer);
    }

    /// <summary>
    /// Start preview
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> StartPreview(string org, string repository)
    {
        await _previewService.StartPreview(org, repository, Developer);
        return Accepted();
    }

    /// <summary>
    /// Pushes layout file change.
    /// </summary>
    /// <returns></returns>
    [HttpPut]
    public async Task<IActionResult> Push(string org, string repo)
    {
        await _previewService.PushChanges(org, repo, Developer);
        return Accepted();
    }

    private string Developer => AuthenticationHelper.GetDeveloperUserName(HttpContext);
}
