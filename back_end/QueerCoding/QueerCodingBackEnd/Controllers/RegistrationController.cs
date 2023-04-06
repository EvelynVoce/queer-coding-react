namespace QueerCodingBackEnd.Controllers;
using Microsoft.AspNetCore.Mvc;
using Registration;

public class AttendanceDefinition
{
    public Guid UserId { get; set; }
    public string? Forename { get; set; }
    public string? Surname { get; set; }
    public int? Age { get; set; }
    public string? Gender { get; set; }
    public string? Sexuality { get; set; }
    public string? Course { get; set; }
}


[ApiController]
public class RegistrationController : ControllerBase
{
    
    private readonly IRegistrationService _registrationService;
    
    public RegistrationController(IRegistrationService registrationService)
    {
        _registrationService = registrationService;
    }

    [HttpPost("api/registration")]
    public void ConfirmAttendance([FromBody] AttendanceDefinition definition)
    {
        _registrationService.RegisterAttendance(definition);
    }
}