using System.Collections.Generic;
using App.Entity.Security;

namespace App.Service.Security
{
    public interface IPermissionService
    {
        void CreateIfNotExist(IList<Entity.Security.Permission> permissons);
        IList<PermissionListItem> GetPermissions();
        void DeletePermission(string itemId);
        void CreatePermission(AddOrEditPermissionRequest request);
        Permission GetPermissionById(string perId);
        void EditPermission(AddOrEditPermissionRequest request);
    }
}
