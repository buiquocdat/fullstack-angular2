
using System;
using System.Collections.Generic;
using App.Entity.ContentManagement;
using App.Service.ContentManagement;
using App.Common.Data;
using App.Context;
using App.Common;
using App.Common.DI;
using App.Common.Validation;
using App.Repository.ContentManagement;

namespace App.Service.Impl.ContentManagement
{
    public class CategoryService : ICategoryService
    {
        public void CreateCategory(AddOrEditCategoryRequest request)
        {
            ValidationForAddOrEdit(request, false);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>(uow);
                Category cat = new Category(request.Name, request.Description, request.Status);
                catRepo.Add(cat);
                uow.Commit();
            }
        }

        private void ValidationForAddOrEdit(AddOrEditCategoryRequest request, bool isModify)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ValidationException("contentManagement.addOrEditCategory.validation.nameIsRequired");
            }
            ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>();
            if (isModify)
            {
                Category cat = catRepo.GetById(request.Id);
                if(catRepo.GetByName(request.Name) != null && catRepo.GetByName(request.Name).Name == cat.Name)
                {
                    throw new ValidationException("contentManagement.addOrEditCategory.validation.nameWasExists");
                }
            }
            else
            {
                if(catRepo.GetByName(request.Name) != null)
                {
                    throw new ValidationException("contentManagement.addOrEditCategory.validation.nameWasExists");
                }
            }
        }

        public void DeleteCategory(string itemId)
        {
            ValidationForIdCategory(itemId);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>(uow);
                catRepo.Delete(itemId);
                uow.Commit();
            }
        }

        private void ValidationForIdCategory(string itemId)
        {
            if (string.IsNullOrWhiteSpace(itemId))
            {
                throw new ValidationException("contentManagement.categories.validation.idIsRequired");
            }
            Guid id;
            if(!Guid.TryParse(itemId, out id))
            {
                throw new ValidationException("contentManagement.categories.validation.idInValid");
            }
        }

        public void EditCategory(AddOrEditCategoryRequest request)
        {
            ValidationForAddOrEdit(request, true);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>(uow);
                Category cat = catRepo.GetById(request.Id);
                if(cat != null)
                {
                    cat.Name = request.Name;
                    cat.Description = request.Description;
                    cat.Status = request.Status;
                    catRepo.Update(cat);
                    uow.Commit();
                }
            }
        }

        public IList<CategoryListItem> GetCategories()
        {
            ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>();
            return catRepo.GetItems<CategoryListItem>();
        }

        public Category GetCategoryById(string itemId)
        {
            ValidationForIdCategory(itemId);
            ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>();
            return catRepo.GetById(itemId);
        }

        public void CreateIfNotExist(IList<Category> categories)
        {
            if (categories == null) { return; }
            using (IUnitOfWork uow = new App.Common.Data.UnitOfWork(new App.Context.AppDbContext(IOMode.Write)))
            {
                ICategoryRepository catRepo = IoC.Container.Resolve<ICategoryRepository>(uow);
                foreach (Category category in categories)
                {
                    Category existCategory = catRepo.GetByName(category.Name);
                    if (existCategory != null) { continue; }
                    catRepo.Add(category);
                }
                uow.Commit();
            }
        }
    }
}
