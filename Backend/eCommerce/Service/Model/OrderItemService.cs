using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using eCommerce.Service.Interface;
using eCommerce.Data;
namespace eCommerce.Service.Model
{

    public class OrderItemService : IOrderItemService
    {
        private readonly ApplicationDbContext db;

        public OrderItemService(ApplicationDbContext context)
        {
            db = context;
        }

        public async Task<IEnumerable<OrderItem>> GetOrderItemsAsync()
        {
            return await db.OrderItems.ToListAsync();
        }

        public async Task<OrderItem> GetOrderItemByIdAsync(int id)
        {
            return await db.OrderItems.FirstOrDefaultAsync(oi => oi.Id == id);
        }

        public async Task<OrderItem> CreateOrderItemAsync(OrderItem orderItem)
        {
            db.OrderItems.Add(orderItem);
            await db.SaveChangesAsync();
            return orderItem;
        }

        public async Task<OrderItem> UpdateOrderItemAsync(int id, OrderItem orderItem)
        {
            var existingOrderItem = await db.OrderItems.FindAsync(id);
            if (existingOrderItem == null)
            {
                return null;
            }

            existingOrderItem.OrderId = orderItem.OrderId;
            existingOrderItem.ProductId = orderItem.ProductId;
            existingOrderItem.Quantity = orderItem.Quantity;
            existingOrderItem.UnitPrice = orderItem.UnitPrice;

            db.Entry(existingOrderItem).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return existingOrderItem;
        }

        public async Task<bool> DeleteOrderItemAsync(int id)
        {
            var orderItem = await db.OrderItems.FindAsync(id);
            if (orderItem == null)
            {
                return false;
            }

            db.OrderItems.Remove(orderItem);
            await db.SaveChangesAsync();

            return true;
        }
    }

}