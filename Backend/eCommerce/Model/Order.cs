using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class Order
    {
        int Id { get; set; }
        string CustomerFullName { get; set; }
        string Address { get; set; }
        string PhoneNumber { get; set; }
        double TotalAmount { get; set; }
        DateTime OrderDate { get; set; }
        string Status { get; set; }
        List<OrderItem> OrderItems { get; set; }

    }
}