using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers;
[Route("gallery")]
public class GalleryController : BaseController
{
    [Route("")]
    public IActionResult Index()
    {
        CloudPage("Gallery").SetDescription("Immerse yourself in the stunning world of transforming furniture with ABBY's gallery. Browse through our captivating designs that seamlessly blend style, functionality, and space optimization.");

        return View();
    }
}
