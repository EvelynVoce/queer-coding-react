using WebApplication1;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy  =>
        {
            policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
        });
    
});

var app = builder.Build();
app.MapControllers();
app.UseCors(MyAllowSpecificOrigins);
app.MapGet("/", () => "Hello World!");

app.Run();
