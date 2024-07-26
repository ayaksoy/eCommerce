using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Model;

namespace eCommerce.Dto
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string? CustomerFullName { get; set; }
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Status { get; set; }
        public List<OrderItem>? OrderItems { get; set; }

    }
}