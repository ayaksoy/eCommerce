using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Data;
using eCommerce.Dto;
using eCommerce.Model;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Service
{
    public class ProductService(ApplicationDbContext db)
    {
        private readonly ApplicationDbContext db = db;

        public List<Product> GetAllProducts()
        {
            return db.Products.ToList();
        }
        public Product GetProductById(int id)
        {
            return db.Products.Find(id);
        }
        public async Task<IEnumerable<Product>> GetProductsByCategoryIdAsync(int categoryId)
        {
            return await db.Products.Where(p => p.CategoryId == categoryId).ToListAsync();
        }
        public void AddProduct(ProductDto newProduct)
        {
            var product = new Product
            {
                Name = newProduct.Name,
                Description = newProduct.Description,
                Price = newProduct.Price,
                Stock = newProduct.Stock,
                ImageUrl = newProduct.ImageUrl,
                CategoryId = newProduct.CategoryId
            };
            db.Products.Add(product);
            db.SaveChanges();
        }
        public void UpdateProductById(int id, ProductDto product)
        {
            var existingProduct = db.Products.Find(id) ?? throw new Exception("Product not found");
            existingProduct.Name = product.Name;
            existingProduct.Description = product.Description;
            existingProduct.Price = product.Price;
            existingProduct.Stock = product.Stock;
            existingProduct.ImageUrl = product.ImageUrl;
            existingProduct.CategoryId = product.CategoryId;
            db.SaveChanges();
        }
        public void DeleteOneProductById(int id)
        {
            var product = db.Products.Find(id) ?? throw new Exception("Product not found");
            db.Products.Remove(product);
            db.SaveChanges();
        }
    }
}