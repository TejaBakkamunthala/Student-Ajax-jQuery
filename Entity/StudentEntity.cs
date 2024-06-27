using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace StudentRegistrationFormjQueryAjax.Entity
{
    public class StudentEntity
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }

        public long Fees { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Country { get; set; }


    }
}
