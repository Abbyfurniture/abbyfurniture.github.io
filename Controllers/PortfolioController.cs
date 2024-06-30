using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers;
[Route("portfolio")]
public class PortfolioController : BaseController
{
    [Route("")]
    public IActionResult Index()
    {
        CloudPage("Portfolio").SetDescription("Discover ABBY's portfolio of inspiring transforming furniture designs. Explore our collection and see how we have elevated spaces with our innovative and practical creations.");

        return View();
    }
}
