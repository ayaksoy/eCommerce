using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using eCommerce.Data;
using eCommerce.Model;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext db;

        public AdminController(ApplicationDbContext context)
        {
            db = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Admin>> GetAdmins()
        {
            return db.Admins.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Admin> GetAdmin(int id)
        {
            var admin = db.Admins.Find(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        [HttpPost]
        public ActionResult<Admin> PostAdmin(Admin admin)
        {
            db.Admins.Add(admin);
            db.SaveChanges();

            return CreatedAtAction(nameof(GetAdmin), new { id = admin.Id }, admin);
        }

        [HttpPut("{id}")]
        public IActionResult PutAdmin(int id, Admin admin)
        {
            if (id != admin.Id)
            {
                return BadRequest();
            }

            db.Entry(admin).State = EntityState.Modified;
            db.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAdmin(int id)
        {
            var admin = db.Admins.Find(id);

            if (admin == null)
            {
                return NotFound();
            }

            db.Admins.Remove(admin);
            db.SaveChanges();

            return NoContent();
        }
    }

}