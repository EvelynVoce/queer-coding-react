namespace WebApplication1.Registration;
using Microsoft.Extensions.DependencyInjection;
public static class DependencyInjection
{
    public static IServiceCollection AddRegistration(this IServiceCollection services)
    {
        return services
            .AddSingleton<IRegistrationService, RegistrationService>();
    }
}