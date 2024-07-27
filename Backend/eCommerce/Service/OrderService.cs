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

    public class OrderService
    {
        private readonly ApplicationDbContext db;

        public OrderService(ApplicationDbContext context)
        {
            db = context;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await db.Orders.Include(o => o.OrderItems).ToListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await db.Orders.Include(o => o.OrderItems).FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<Order> CreateOrderAsync(OrderDto order)
        {
            var newOrder = new Order
            {
                CustomerFullName = order.CustomerFullName,
                Address = order.Address,
                PhoneNumber = order.PhoneNumber,
                Status = order.Status,
                OrderDate = DateTime.Now,
                TotalAmount = order.OrderItems.Sum(oi => oi.UnitPrice)
            };
            await db.SaveChangesAsync();
            return newOrder;
        }

        public async Task<Order> UpdateOrderAsync(int id, Order order)
        {
            var existingOrder = await db.Orders.FindAsync(id);
            if (existingOrder == null)
            {
                return null;
            }

            existingOrder.CustomerFullName = order.CustomerFullName;
            existingOrder.OrderDate = order.OrderDate;
            existingOrder.Status = order.Status;
            existingOrder.TotalAmount = order.TotalAmount;
            existingOrder.Address = order.Address;
            existingOrder.PhoneNumber = order.PhoneNumber;

            db.Entry(existingOrder).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return existingOrder;
        }

        public async Task<bool> DeleteOrderAsync(int id)
        {
            var order = await db.Orders.FindAsync(id);
            if (order == null)
            {
                return false;
            }

            db.Orders.Remove(order);
            await db.SaveChangesAsync();

            return true;
        }
    }

}