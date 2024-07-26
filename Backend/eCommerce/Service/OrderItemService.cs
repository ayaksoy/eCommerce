using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using eCommerce.Data;
using eCommerce.Dto;
namespace eCommerce.Service
{

    public class OrderItemService
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


        public async Task<OrderItem> CreateOrderItemAsync(OrderItemDto orderItem)
        {
            var price = db.Products.Find(orderItem.ProductId).Price;
            var newOrderItem = new OrderItem
            {
                OrderId = orderItem.OrderId,
                ProductId = orderItem.ProductId,
                Quantity = orderItem.Quantity,
                UnitPrice = orderItem.Quantity * price
            };

            db.OrderItems.Add(newOrderItem);
            await db.SaveChangesAsync();

            return newOrderItem;
        }

        public async Task<OrderItem> UpdateOrderItemAsync(int id, OrderItemDto orderItem)
        {
            var existingOrderItem = await db.OrderItems.FindAsync(id);
            var price = db.Products.Find(orderItem.ProductId).Price;
            if (existingOrderItem == null)
            {
                return null;
            }

            existingOrderItem.OrderId = orderItem.OrderId;
            existingOrderItem.ProductId = orderItem.ProductId;
            existingOrderItem.Quantity = orderItem.Quantity;
            existingOrderItem.UnitPrice = orderItem.Quantity * price;
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