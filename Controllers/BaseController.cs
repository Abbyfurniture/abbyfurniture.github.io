using AngryMonkey.CloudMVC;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Website.Controllers;

public class BaseController : CloudController
{
    public override void OnActionExecuting(ActionExecutingContext filterContext)
    {
        string rawUrl = Request.Path.Value;
        rawUrl = rawUrl.Trim(new char[] { ' ', '/' });

        if (rawUrl.Contains('/'))
            rawUrl = rawUrl.Split('/')[0];

        ViewData["CurrentPath"] = rawUrl;

        base.OnActionExecuting(filterContext);
    }

}
