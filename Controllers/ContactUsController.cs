using Microsoft.AspNetCore.Mvc;
using Website.Controllers;

namespace ABBY.Controllers;
[Route("contact-us")]
public class ContactUsController : BaseController
{
    [Route("")]
    public IActionResult Index()
    {
        CloudPage("Contact Us | Get in Touch for Transforming Furniture Solutions").SetDescription("Contact ABBY to explore our transforming furniture solutions. Reach out to our team for inquiries, directions, or to fill out the contact form and discuss your specific requirements.");

        return View();
    }
}
