using Altinn.Platform.Storage.Interface.Models;
using Altinn.Studio.Designer.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Altinn.Studio.Designer.Controllers
{
    /// <summary>
    /// Controller containing all actions related to data modelling
    /// </summary>
    [Authorize]
    [AutoValidateAntiforgeryToken]
    [Route("{org}/{app}")]
    public class PreviewController : Controller
    {
        private readonly IRepository _repository;
        private readonly ISchemaModelService _schemaModelService;

         /// <summary>
        /// Initializes a new instance of the <see cref="PreviewController"/> class.
        /// </summary>
        /// <param name="repositoryService">The service repository service.</param>
        /// <param name="sourceControl">The source control service.</param>
        public PreviewController(
            IRepository repositoryService, ISourceControl sourceControl)
        {
            _repository = repositoryService;
        }

         /// <summary>
        /// The index action which will show the React form builder
        /// </summary>
        /// <param name="org">Unique identifier of the organisation responsible for the app.</param>
        /// <param name="app">Application identifier which is unique within an organisation.</param>
        /// <returns>A view with the React form builder</returns>
        public IActionResult Index(string org, string app)
        {
            return View();
        }

         /// <summary>
        /// The index action which will show the React form builder
        /// </summary>
        /// <param name="org">Unique identifier of the organisation responsible for the app.</param>
        /// <param name="app">Application identifier which is unique within an organisation.</param>
        /// <returns>A view with the React form builder</returns>
        [Route("api/v1/applicationmetadata")]
        [HttpGet]
        public IActionResult ApplicationMetadata(string org, string app)
        {
            Application application = _repository.GetApplication(org, app);
            return Ok(application);
        }

         /// <summary>
        /// The index action which will show the React form builder
        /// </summary>
        /// <param name="org">Unique identifier of the organisation responsible for the app.</param>
        /// <param name="app">Application identifier which is unique within an organisation.</param>
        /// <returns>A view with the React form builder</returns>
        [Route("api/v1/applicationsettings")]
        [HttpGet]
        public IActionResult ApplicationSettings(string org, string app)
        {
            Application application = _repository.GetApplication(org, app);
            return Ok(application);
        }

         /// <summary>
        /// The index action which will show the React form builder
        /// </summary>
        /// <param name="org">Unique identifier of the organisation responsible for the app.</param>
        /// <param name="app">Application identifier which is unique within an organisation.</param>
        /// <returns>A view with the React form builder</returns>
        [Route("api/layoutsets")]
        [HttpGet]
        public IActionResult LayoutSets(string org, string app)
        {
            return Ok();
        }
    }
}
