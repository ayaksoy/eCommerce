using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using eCommerce.Data;
using eCommerce.Model;
using Microsoft.EntityFrameworkCore;
using eCommerce.Service;
using eCommerce.Dto;

namespace eCommerce.Controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService service;

        public ProductController(ProductService service)
        {
            this.service = service;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return service.GetAllProducts();
        }
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategoryId(int categoryId)
        {
            var products = await service.GetProductsByCategoryIdAsync(categoryId);
            return Ok(products);
        }


        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = service.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public void PostProduct(ProductDto newProduct)
        {
            service.AddProduct(newProduct);
        }

        [HttpPut("{id}")]
        public IActionResult PutProduct(int id, ProductDto newProduct)
        {
            try
            {
                service.UpdateProductById(id, newProduct);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                service.DeleteOneProductById(id);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

            return NoContent();
        }
    }

}