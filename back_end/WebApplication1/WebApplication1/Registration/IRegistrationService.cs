namespace WebApplication1.Registration;
using Controllers;
public interface IRegistrationService
{
    Task RegisterAttendance(AttendanceDefinition definition);
}
