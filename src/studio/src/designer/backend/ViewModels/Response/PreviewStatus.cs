namespace Altinn.Studio.Designer.ViewModels.Response;

/// <summary>
/// Preview running status DTO
/// </summary>
public class PreviewStatus
{
    /// <summary>
    /// Inidicates if preview is running
    /// </summary>
    public bool Running { get; set; }

    /// <summary>
    /// Url.
    /// </summary>
    public string Url { get; set; }
}
