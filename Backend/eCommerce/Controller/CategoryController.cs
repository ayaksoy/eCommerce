using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Data;
using eCommerce.Dto;
using eCommerce.Model;
using eCommerce.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace eCommerce.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {

        private readonly CategoryService service;

        public CategoryController(CategoryService service)
        {
            this.service = service;
        }
        [HttpGet]
        public ActionResult<List<Category>> GetCategories()
        {
            return service.GetAllCategories();
        }

        [HttpGet("{id}")]
        public ActionResult<Category> GetCategory(int id)
        {
            return service.GetCategoryById(id);
        }

        [HttpPost]
        public ActionResult<Category> PostCategory(CategoryDto category)
        {
            return service.CreateCategory(category);
        }

        [HttpPut("{id}")]
        public IActionResult PutCategory(int id, CategoryDto category)
        {
            return service.UpdateCategory(id, category);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            return service.DeleteCategory(id);
        }
    }

}