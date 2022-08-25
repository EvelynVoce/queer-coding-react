namespace WebApplication1;
using Microsoft.AspNetCore.Mvc;


public class AttendanceDefinition
{
    public string? UserId { get; set; }
}


[ApiController]
public class RegistrationController : ControllerBase
{

    [HttpPost("api/registration")]
    public async Task<IActionResult> ConfirmAttendance([FromBody] AttendanceDefinition definition)
    {
        Console.WriteLine(definition.UserId);
        return Ok();
    }
}