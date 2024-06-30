using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers;
[Route("services")]
public class ServicesController : BaseController
{
    [Route("")]
    public IActionResult Index()
    {
        CloudPage("Services").SetDescription("Explore ABBY's comprehensive range of transforming furniture solutions. From space-saving designs to multi-functional pieces, our services offer customized options to optimize your living spaces.");

        return View();
    }
}
