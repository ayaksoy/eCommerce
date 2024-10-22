using eCommerce.Dto;
using eCommerce.Model;
using eCommerce.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerce.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderItemController : ControllerBase
    {
        private readonly OrderItemService service;

        public OrderItemController(OrderItemService orderItemService)
        {
            service = orderItemService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderItem>>> GetOrderItems()
        {
            var orderItems = await service.GetOrderItemsAsync();
            return Ok(orderItems);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderItem>> GetOrderItem(int id)
        {
            var orderItem = await service.GetOrderItemByIdAsync(id);

            if (orderItem == null)
            {
                return NotFound();
            }

            return Ok(orderItem);
        }

        [HttpPost]
        public async Task<ActionResult<OrderItem>> PostOrderItem(OrderItemDto orderItem)
        {
            var createdOrderItem = await service.CreateOrderItemAsync(orderItem);
            return CreatedAtAction(nameof(GetOrderItem), new { id = createdOrderItem.Id }, createdOrderItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderItem(int id, OrderItemDto orderItem)
        {
            //order itemda id yok

            var updatedOrderItem = await service.UpdateOrderItemAsync(id, orderItem);

            if (updatedOrderItem == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderItem(int id)
        {
            var success = await service.DeleteOrderItemAsync(id);

            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
