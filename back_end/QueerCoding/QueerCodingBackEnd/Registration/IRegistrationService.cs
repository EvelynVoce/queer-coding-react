namespace QueerCodingBackEnd.Registration;
using Controllers;
public interface IRegistrationService
{
    Task RegisterAttendance(AttendanceDefinition definition);
}
