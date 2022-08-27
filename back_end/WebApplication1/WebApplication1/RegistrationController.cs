namespace WebApplication1;
using Microsoft.AspNetCore.Mvc;


public class AttendanceDefinition
{
    public string? Forename { get; set; }
    public string? Surname { get; set; }
    public string? Age { get; set; }
}


[ApiController]
public class RegistrationController : ControllerBase
{

    [HttpPost("api/registration")]
    public async Task<IActionResult> ConfirmAttendance([FromBody] AttendanceDefinition definition)
    {
        Console.WriteLine(definition.Forename);
        return Ok();
    }
}