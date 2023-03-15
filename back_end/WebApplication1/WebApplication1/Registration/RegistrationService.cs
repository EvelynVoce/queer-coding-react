using System.Data;

namespace WebApplication1.Registration;
using Controllers;
using Dapper;
using System.Data.SqlClient;  


public class Example
{
    public Guid UserID { get; set; }
    
    public string? FirstName { get; set; }

    public string? Surname { get; set; }
        
    public int? Age { get; set; }

    public string? Gender { get; set; }
    
    public string? Sexuality { get; set; }
    
    public string? Course { get; set; }
}

public class RegistrationService : IRegistrationService
{
    public async Task RegisterAttendance(AttendanceDefinition definition)
    {
        Console.WriteLine(
            $"{definition.Forename} {definition.Surname} {definition.Age} {definition.Gender} {definition.Sexuality} {definition.Course}");
        using (IDbConnection connection = new SqlConnection(Helper.CnnVal("QueerCodingUsers")))
        {
            Example eg1 = new Example
            {
                UserID = Guid.NewGuid(), FirstName = definition.Forename,
                Surname = definition.Surname, Age = definition.Age, Gender = definition.Gender,
                Sexuality = definition.Sexuality, Course = definition.Course
            };

            await connection.ExecuteAsync(
                "dbo.Users_Insert @FirstName, @Surname, @Age, @Gender, @Sexuality, @Course, @UserID", eg1);
        }
    }
}

