using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers
{
    [Route("")]
    public class HomeController : BaseController
    {
        [Route("")]
        public IActionResult Index()
        {
            CloudPage("ABBY").SetDescription(" Welcome to ABBY, your destination for exotic furniture that transforms and elevates spaces. Discover our unique designs and create a functional and stylish environment for your home.");

            return View();
        }
    }
}