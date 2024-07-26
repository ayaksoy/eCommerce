using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerce.Service.Interface
{

    public interface IOrderItemService
    {
        Task<IEnumerable<OrderItem>> GetOrderItemsAsync();
        Task<OrderItem> GetOrderItemByIdAsync(int id);
        Task<OrderItem> CreateOrderItemAsync(OrderItem orderItem);
        Task<OrderItem> UpdateOrderItemAsync(int id, OrderItem orderItem);
        Task<bool> DeleteOrderItemAsync(int id);
    }

}