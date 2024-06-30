using ABBY.Model;
using AngryMonkey.CloudWeb;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddSingleton<ConfigurationModel>(sp =>
{
    var configuration = sp.GetService<IConfiguration>();
    string email = configuration.GetValue<string>("SMTP:Email");
    string password = configuration.GetValue<string>("SMTP:Password");
    string receiver = configuration.GetValue<string>("SMTP:Receiver");

    return new(email, password, receiver);

});


CloudWebConfig cloudWeb = new()
{
    PageDefaults = new()
    {
        Title = "ABBY",
        Bundles = new()
         {
         new(){ Source = "https://cdn.amcapi.com/cloudweb/1.0.2/cloud-base.min.js" },
         new(){ Source = "css/site.css"},
         new(){ Source = "js/cloud-components.js", MinOnRelease= false},
         new(){ Source = "js/site.js"},
         },
        Features = new()
        {
            CloudPageFeatures.JQuery
        },
        TitleAddOns = new()
        {
            "| Transforming Furniture Solutions",
            "| Transforming Furniture Specialists",
            "| Stunning Transforming Furniture Creations",
        }
    },
    TitleSuffix = " | Exotic Furniture for Transforming and Elevating Spaces",
};

builder.Services.AddCloudWeb(cloudWeb);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

await app.RunAsync();
