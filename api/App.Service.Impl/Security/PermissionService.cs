using App.Common.DI;
using App.Repository.Security;
using App.Service.Security;
using System.Collections.Generic;
using System;
using App.Common.Validation;
using App.Common.Data;
using App.Context;
using App.Common;
using App.Entity.Security;

namespace App.Service.Impl.Security
{
    public class PermissionService : IPermissionService
    {
        public void CreateIfNotExist(IList<Permission> permissions)
        {
            if (permissions == null) { return; }
            using (IUnitOfWork uow = new App.Common.Data.UnitOfWork(new App.Context.AppDbContext(IOMode.Write)))
            {
                IPermissionRepository permissonsRepository = IoC.Container.Resolve<IPermissionRepository>(uow);
                foreach (Permission permission in permissions)
                {
                    Permission existPermisson = permissonsRepository.GetByKey(permission.Key);
                    if (existPermisson != null) { continue; }
                    permissonsRepository.Add(permission);
                }
                uow.Commit();
            }
        }

        public IList<PermissionListItem> GetPermissions()
        {
            IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>();
            return perRepo.GetItems<PermissionListItem>();
        }

        public void DeletePermission(string itemId)
        {
            ValidationForIdPermission(itemId);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                perRepo.Delete(itemId);
                uow.Commit();
            }
        }

        private void ValidationForIdPermission(string itemId)
        {
            if (string.IsNullOrWhiteSpace(itemId))
            {
                throw new ValidationException("security.deletePermission.invalid");
            }
            Guid id;
            if(!Guid.TryParse(itemId, out id))
            {
                throw new ValidationException("security.deletePermission.invalid");
            }
        }


        public void CreatePermission(AddOrEditPermissionRequest request)
        {
            ValidationForAddOrEdit(request, false);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                Permission per = new Permission(request.Name, request.Key, request.Description);
                perRepo.Add(per);
                uow.Commit();
            }
        }

        private void ValidationForAddOrEdit(AddOrEditPermissionRequest request, bool isModify)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ValidationException("security.addOrEditPermission.validation.nameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(request.Key))
            {
                throw new ValidationException("security.addOrEditPermission.validation.keyIsRequired");
            }
            if (request.Key.Contains(" "))
            {
                throw new ValidationException("security.addOrEditPermission.validation.keyHasNotWhiteSpace");
            }
            if (isModify)
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>();
                Permission per = perRepo.GetById(request.Id);
                if (perRepo.GetByName(request.Name) != null && perRepo.GetByName(request.Name).Name != per.Name)
                {
                    throw new ValidationException("security.addOrEditPermission.validation.nameWasExists");
                }
                if (perRepo.GetByKey(request.Key) != null && perRepo.GetByKey(request.Key).Key != per.Key)
                {
                    throw new ValidationException("security.addOrEditPermission.validation.keyWasExists");
                }
            }
            else
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>();
                if (perRepo.GetByName(request.Name) != null)
                {
                    throw new ValidationException("security.addOrEditPermission.validation.nameWasExists");
                }
                if (perRepo.GetByKey(request.Key) != null)
                {
                    throw new ValidationException("security.addOrEditPermission.validation.keyWasExists");
                }
            }
        }

        public Permission GetPermissionById(string perId)
        {
            ValidationForIdPermission(perId);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>();
                Permission per = perRepo.GetById(perId);
                return per;
            }
        }

        public void EditPermission(AddOrEditPermissionRequest request)
        {
            ValidationForAddOrEdit(request, true);
            using(IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                Permission per = perRepo.GetById(request.Id);
                if (per != null)
                {
                    per.Name = request.Name;
                    per.Key = request.Key;
                    per.Description = request.Description;
                    perRepo.Update(per);
                    uow.Commit();
                }
            }
        }
    }
}
