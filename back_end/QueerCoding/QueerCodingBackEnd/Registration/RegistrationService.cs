using System.Data;

namespace QueerCodingBackEnd.Registration;
using Models;
using Dapper;
using System.Data.SqlClient;

public class RegistrationService : IRegistrationService
{
    public async Task RegisterAttendance(AttendeeModel definition)
    {
        definition.UserId = Guid.NewGuid();
        using IDbConnection connection = new SqlConnection(Helper.CnnVal("QueerCodingUsers"));
        await connection.ExecuteAsync("dbo.Users_Insert @Forename, @Surname, @Age, @Gender, @Sexuality, @Course, @UserId", definition);
    }
}

