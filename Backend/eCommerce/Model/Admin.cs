using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class Admin
    {
        int Id { get; set; }
        string Username { get; set; }
        string Password { get; set; }
        string Email { get; set; }
        string Name { get; set; }
        string Surname { get; set; }
    }
}