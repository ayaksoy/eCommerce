using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class Order
    {
        public int Id { get; set; }
        public string? CustomerFullName { get; set; }
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        public double TotalAmount { get; set; }
        public DateTime OrderDate { get; set; }
        public string? Status { get; set; }
        public List<OrderItem>? OrderItems { get; set; }

    }
}