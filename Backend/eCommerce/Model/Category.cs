using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class Category
    {
        int Id { get; set; }
        string Name { get; set; }
        string Description { get; set; }
        List<Product> Products { get; set; }
    }
}