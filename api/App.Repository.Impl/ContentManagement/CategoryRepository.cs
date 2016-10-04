
using System;
using App.Common.Data;
using App.Common.Data.MSSQL;
using App.Context;
using App.Entity.ContentManagement;
using App.Repository.ContentManagement;
using System.Linq;

namespace App.Repository.Impl.ContentManagement
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository() : base(new AppDbContext())
        {
        }
        public CategoryRepository(IUnitOfWork uow) : base(uow.Context as IMSSQLDbContext)
        {
        }

        public Category GetByName(string name)
        {
            return this.DbSet.AsQueryable().Where(cat => cat.Name == name).FirstOrDefault();
        }
    }
}
