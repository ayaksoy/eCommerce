using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Model
{
    public class OrderItem
    {
        int Id { get; set; }
        int OrderId { get; set; }
        Order Order { get; set; }
        int ProductId { get; set; }
        Product Product { get; set; }
        int Quantity { get; set; }
        double UnitPrice { get; set; }
    }
}