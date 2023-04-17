namespace QueerCodingBackEnd.Controllers;
using Microsoft.AspNetCore.Mvc;
using Registration;
using Models;



[ApiController]
public class RegistrationController : ControllerBase
{
    
    private readonly IRegistrationService _registrationService;
    
    public RegistrationController(IRegistrationService registrationService)
    {
        _registrationService = registrationService;
    }

    [HttpPost("api/registration")]
    public void ConfirmAttendance([FromBody] AttendeeModel definition)
    {
        _registrationService.RegisterAttendance(definition);
    }
}