using System.Collections.Generic;

namespace App.Service.Security
{
    public interface IPermissionService
    {
        void CreateIfNotExist(IList<Entity.Security.Permission> permissons);
        IList<PermissionListItem> GetPermissions();
        void DeletePermission(string itemId);
        void CreatePermission(CreatePermissionRequest request);
    }
}
