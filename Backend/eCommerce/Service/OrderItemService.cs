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
        private readonly OrderService orderService;

        public OrderItemService(ApplicationDbContext context, OrderService orderService)
        {
            db = context;
            this.orderService = orderService;
        }
        public async Task<IEnumerable<OrderItem>> GetOrderItemsAsync()
        {
            return await db.OrderItems.Include(oi => oi.Product).ToListAsync();
        }

        public async Task<OrderItem> GetOrderItemByIdAsync(int id)
        {
            return await db.OrderItems.Include(oi => oi.Product).FirstOrDefaultAsync(oi => oi.Id == id);
        }


        public async Task<OrderItem> CreateOrderItemAsync(OrderItemDto orderItem)
        {
            var product = db.Products.Find(orderItem.ProductId);
            if (product == null && product.Stock < orderItem.Quantity)
                return null;
            var newOrderItem = new OrderItem
            {
                OrderId = orderItem.OrderId,
                ProductId = orderItem.ProductId,
                Quantity = orderItem.Quantity,
                UnitPrice = orderItem.Quantity * product.Price
            };

            db.OrderItems.Add(newOrderItem);
            var order = await orderService.GetOrderByIdAsync(orderItem.OrderId);

            product.Stock -= orderItem.Quantity;
            order.TotalAmount += newOrderItem.UnitPrice;
            db.Entry(order).State = EntityState.Modified;
            db.Entry(product).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return newOrderItem;
        }

        public async Task<OrderItem> UpdateOrderItemAsync(int id, OrderItemDto orderItem)
        {
            var existingOrderItem = await db.OrderItems.FindAsync(id);
            var order = await orderService.GetOrderByIdAsync(orderItem.OrderId);

            var product = db.Products.Find(orderItem.ProductId);
            var price = db.Products.Find(orderItem.ProductId).Price;
            if (existingOrderItem == null)
            {
                return null;
            }
            order.TotalAmount -= existingOrderItem.UnitPrice;
            product.Stock += existingOrderItem.Quantity;
            
            existingOrderItem.OrderId = orderItem.OrderId;
            existingOrderItem.ProductId = orderItem.ProductId;
            existingOrderItem.Quantity = orderItem.Quantity;
            existingOrderItem.UnitPrice = orderItem.Quantity * price;
            db.Entry(existingOrderItem).State = EntityState.Modified;

            product.Stock -= orderItem.Quantity;
            order.TotalAmount += existingOrderItem.UnitPrice;
            db.Entry(order).State = EntityState.Modified;
            db.Entry(product).State = EntityState.Modified;
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