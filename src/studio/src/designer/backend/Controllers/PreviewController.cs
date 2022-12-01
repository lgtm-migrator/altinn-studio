using Altinn.Platform.Storage.Interface.Models;
using Altinn.Studio.Designer.Helpers;
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
        private readonly IAltinnGitRepositoryFactory _altinnGitRepositoryFactory;

         /// <summary>
        /// Initializes a new instance of the <see cref="PreviewController"/> class.
        /// </summary>
        /// <param name="repositoryService">The service repository service.</param>
        /// <param name="sourceControl">The source control service.</param>
        /// <param name="altinnGitRepositoryFactory">
        /// Factory class that knows how to create types of <see cref="AltinnGitRepository"/>
        /// </param>
        public PreviewController(
            IRepository repositoryService, ISourceControl sourceControl, IAltinnGitRepositoryFactory altinnGitRepositoryFactory)
        {
            _repository = repositoryService;
            _altinnGitRepositoryFactory = altinnGitRepositoryFactory;
        }

         /// <summary>
        /// The index action which will show the React form builder
        /// </summary>
        /// <param name="org">Unique identifier of the organisation responsible for the app.</param>
        /// <param name="app">Application identifier which is unique within an organisation.</param>
        /// <returns>A view with the React form builder</returns>
        public IActionResult Index(string org, string app)
        {
            ViewBag.Org = org;
            ViewBag.App = app;
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
            var developer = AuthenticationHelper.GetDeveloperUserName(HttpContext);
            var altinnAppGitRepository = _altinnGitRepositoryFactory.GetAltinnAppGitRepository(org, app, developer);
            var applicationMetadata = altinnAppGitRepository.GetApplicationMetadata();
            return Ok(applicationMetadata);
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
            return Ok();
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
