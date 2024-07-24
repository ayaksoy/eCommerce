using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class Product
    {
        int Id { get; set; }
        string Name { get; set; }
        string Description { get; set; }
        double Price { get; set; }
        int Stock { get; set; }
        string ImageUrl { get; set; }
        int CategoryId { get; set; }
        Category Category { get; set; }
    }
}