using Microsoft.EntityFrameworkCore;
using StudentRegistrationFormjQueryAjax.Entity;

namespace StudentRegistrationFormjQueryAjax.Context
{
    public class StudentRegistrationFormContext :  DbContext
    {

        public StudentRegistrationFormContext(DbContextOptions options): base(options)
        {

        }

        public DbSet<StudentEntity>StudentRegistrationForm{ get; set; }
    }
}
