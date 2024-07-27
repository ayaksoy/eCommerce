using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Data;
using eCommerce.Dto;
using eCommerce.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eCommerce.Service
{
    public class CategoryService
    {
        private readonly ApplicationDbContext db;
        public CategoryService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public List<Category> GetAllCategories()
        {
            return db.Categories.Include(c => c.Products).ToList();
        }
        public Category GetCategoryById(int id)
        {
            var category = db.Categories.Include(c => c.Products).FirstOrDefault(c => c.Id == id);
            if (category == null)
            {
                throw new Exception("Category not found");
            }
            return category;
        }
        public ActionResult<Category> CreateCategory(CategoryDto newCategory)
        {
            var category = new Category
            {
                Name = newCategory.Name,
                Description = newCategory.Description,
                ImageUrl = newCategory.ImageUrl
            };
            db.Categories.Add(category);
            db.SaveChanges();
            return category;
        }
        public IActionResult UpdateCategory(int id, CategoryDto category)
        {
            var categoryToUpdate = db.Categories.Find(id);
            if (categoryToUpdate == null)
            {
                return new NotFoundResult();
            }
            categoryToUpdate.Name = category.Name;
            categoryToUpdate.Description = category.Description;
            categoryToUpdate.ImageUrl = category.ImageUrl;
            db.SaveChanges();
            return new NoContentResult();
        }
        public IActionResult DeleteCategory(int id)
        {
            var category = db.Categories.Find(id);
            if (category == null)
            {
                return new NotFoundResult();
            }
            db.Categories.Remove(category);
            db.SaveChanges();
            return new NoContentResult();
        }

    }
}