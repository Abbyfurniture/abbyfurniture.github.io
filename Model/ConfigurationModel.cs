namespace ABBY.Model;
public class ConfigurationModel
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string Receiver { get; set; }

    public ConfigurationModel(string email, string password, string receiver)
    {
        Email = email;
        Password = password;
        Receiver = receiver;
    }
}
