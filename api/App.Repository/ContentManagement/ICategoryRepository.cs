
using App.Common.Data;
using App.Entity.ContentManagement;

namespace App.Repository.ContentManagement
{
    public interface ICategoryRepository : IBaseRepository<Category>
    {
        Category GetByName(string name);
    }
}
