namespace WebApplication1.Registration;
using Controllers;
public class RegistrationService : IRegistrationService
{
    public void RegisterAttendance(AttendanceDefinition definition)
    {
        Console.WriteLine($"{definition.Forename} {definition.Surname} {definition.Age} {definition.Gender} {definition.Sexuality} {definition.Course}");
    }
}