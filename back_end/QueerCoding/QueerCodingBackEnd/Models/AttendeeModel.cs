namespace QueerCodingBackEnd.Models;

public class AttendeeModel
{
    public Guid UserId { get; set; }
    public string? Forename { get; set; }
    public string? Surname { get; set; }
    public int? Age { get; set; }
    public string? Gender { get; set; }
    public string? Sexuality { get; set; }
    public string? Course { get; set; }
}