using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers;

[Route("about-us")]
public class AboutUsController : BaseController
{
    [Route("")]
    public IActionResult Index()
    {
        CloudPage("About us").SetDescription("Learn about ABBY and our expertise as transforming furniture specialists. Find out how we combine innovation and style to create furniture that maximizes space and enhances your living experience.");

        return View();
    }
}
