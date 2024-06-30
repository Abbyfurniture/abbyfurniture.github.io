using ABBY.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Text;
using Website.Controllers;

namespace ABBY.Controllers;

public class EmailController : BaseController
{
    private readonly ConfigurationModel _configurationModel;
    public EmailController(ConfigurationModel configurationModel)
    {
        _configurationModel = configurationModel;
    }


    [Route("email")]
    [HttpPost]

    public async Task<ActionResult> Email([FromBody] MailModel user)
    {
        string name = user.Name;
        string email = user.Email;
        string mobile = user.Mobile;
        string message = user.Message;

        string receiver = _configurationModel.Receiver;
        string smtpEmail = _configurationModel.Email;
        string smtpPassword = _configurationModel.Password;

        try
        {
            SmtpClient client = new("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                UseDefaultCredentials = false,
                Credentials = new System.Net.NetworkCredential(smtpEmail, smtpPassword),
            };

            MailMessage send = new()
            {
                From = new MailAddress(smtpEmail, "Request Message"),
                Subject = "Request Message",
                IsBodyHtml = true,

            };

            StringBuilder builder = new();
            builder.AppendLine($"<b>Client Name:</b> <br/> {name}");
            builder.AppendLine("<br />");
            builder.AppendLine("<br />");
            builder.AppendLine($"<b>Mobile:</b> <br /> {mobile}");
            if(!string.IsNullOrEmpty(email))
            {
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Email:</b> <br /> {email}");
            }
            if (!string.IsNullOrEmpty(message))
            {
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Message:</b> <br /> {message.Replace("\n", "<br/>")} ");
                builder.AppendLine("<br />");
            }

            send.To.Add(receiver);
            send.Body = builder.ToString();
            client.Send(send);

            return Content("Done");
        }
        catch (Exception ex)
        {
            return Content(ex.Message);

        }
    }
}
