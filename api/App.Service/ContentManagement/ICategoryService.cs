
using System.Collections.Generic;
using App.Entity.ContentManagement;

namespace App.Service.ContentManagement
{
    public interface ICategoryService
    {
        System.Collections.Generic.IList<CategoryListItem> GetCategories();
        void DeleteCategory(string itemId);
        Category GetCategoryById(string itemId);
        void CreateCategory(AddOrEditCategoryRequest request);
        void EditCategory(AddOrEditCategoryRequest request);
        void CreateIfNotExist(IList<Category> categories);
    }
}
