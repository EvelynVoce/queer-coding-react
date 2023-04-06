using System.Data;

namespace QueerCodingBackEnd.Registration;
using Controllers;
using Dapper;
using System.Data.SqlClient;

public class RegistrationService : IRegistrationService
{
    public async Task RegisterAttendance(AttendanceDefinition definition)
    {
        Console.WriteLine($"{definition.Forename} {definition.Surname} {definition.Age}" +
                          $" {definition.Gender} {definition.Sexuality} {definition.Course}");
        using (IDbConnection connection = new SqlConnection(Helper.CnnVal("QueerCodingUsers")))
        {
            definition.UserId = Guid.NewGuid();
            await connection.ExecuteAsync(
                "dbo.Users_Insert @Forename, @Surname, @Age, @Gender, @Sexuality, @Course, @UserId", definition);
        }
    }
}

