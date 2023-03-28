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
    /*public async Task RegisterAttendance(AttendanceDefinition definition)
    {
        await using (var connection = new SqlConnection(Helper.CnnVal("QueerCodingUsers")))
        {
            const string insertQuery = "INSERT INTO [dbo].[Users]" +
                                       " (FirstName, Surname, Age, Gender, Sexuality, Course, UserID)" +
                                       " VALUES (@FirstName, @Surname, @Age, @Gender, @Sexuality, @Course, @UserID)";
            Console.WriteLine(insertQuery);
            SqlCommand cmd = new SqlCommand(insertQuery, connection); 
        
            cmd.Parameters.AddWithValue("@FirstName", definition.Forename);
            cmd.Parameters.AddWithValue("@Surname", definition.Surname);
            cmd.Parameters.AddWithValue("@Age", definition.Age);
            cmd.Parameters.AddWithValue("@Gender", definition.Gender);
            cmd.Parameters.AddWithValue("@Sexuality", definition.Sexuality);
            cmd.Parameters.AddWithValue("@Course", definition.Course);
            cmd.Parameters.AddWithValue("@UserID", Guid.NewGuid());
            
            await cmd.ExecuteNonQueryAsync();
            Console.WriteLine("Done");
        }
    }*/
}

