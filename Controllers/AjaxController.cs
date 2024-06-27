using Microsoft.AspNetCore.Mvc;
using StudentRegistrationFormjQueryAjax.Context;
using StudentRegistrationFormjQueryAjax.Entity;

namespace StudentRegistrationFormjQueryAjax.Controllers
{
    public class AjaxController : Controller
    {

        private readonly StudentRegistrationFormContext registrationFormContext;

        public AjaxController(StudentRegistrationFormContext registrationFormContext)
        {
            this.registrationFormContext = registrationFormContext;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult StudentList()
        {
            var result = registrationFormContext.StudentRegistrationForm.ToList();

            if (result != null)
            {
                return new JsonResult(result);
            }
            else
            {
                return null;
            }
        }


        [HttpPost]
        public JsonResult AddStudent(StudentEntity stdEntity)
        {
            StudentEntity std = new StudentEntity()
            {
                Name = stdEntity.Name,
                Fees = stdEntity.Fees,
                City = stdEntity.City,
                State = stdEntity.State,
                Country = stdEntity.Country,
            };
            registrationFormContext.StudentRegistrationForm.Add(std);
            registrationFormContext.SaveChanges();
            return new JsonResult("Data is Saved");

        }


        public JsonResult Delete(int id)
        {
            var result = registrationFormContext.StudentRegistrationForm.Where(em => em.Id == id).FirstOrDefault();

            if (result != null)
            {
                registrationFormContext.Remove(result);
                registrationFormContext.SaveChanges();
                return new JsonResult("Data Deleted");
            }
            else
            {
                return null;
            }
        }


        public JsonResult Edit(int id)
        {
            var result = registrationFormContext.StudentRegistrationForm.Where(em => em.Id == id).FirstOrDefault();
            if (result != null)
            {
                return new JsonResult(result);
            }
            else
            {

                return null;
            }
        }


        public JsonResult Update(StudentEntity stdEntity)
        {
            registrationFormContext.StudentRegistrationForm.Update(stdEntity);
            registrationFormContext.SaveChanges();
            return new JsonResult("Record Updated");
        }


    }

}

   

           
