namespace QueerCodingBackEnd.Registration;
using Models;
public interface IRegistrationService
{
    Task RegisterAttendance(AttendeeModel definition);
}
