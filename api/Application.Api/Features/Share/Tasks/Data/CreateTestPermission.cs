using App.Common.DI;
using App.Common.Tasks;
using App.Service.Security;
using System.Collections.Generic;
using System.Web;
using App.Common;

namespace App.Api.Features.Share.Tasks.Data
{
    public class CreateTestPermission : BaseTask<TaskArgument<System.Web.HttpApplication>>, IApplicationReadyTask<TaskArgument<System.Web.HttpApplication>>
    {
        public CreateTestPermission() : base(ApplicationType.All)
        {
        }

        public override void Execute(TaskArgument<HttpApplication> context)
        {
            IList<Entity.Security.Permission> permissions = new List<Entity.Security.Permission>();
            permissions.Add(new Entity.Security.Permission("Per 1", "key_1", "desc 1"));
            permissions.Add(new Entity.Security.Permission("Per 2", "key_2", "desc 2"));
            permissions.Add(new Entity.Security.Permission("Per 3", "key_3", "desc 3"));
            permissions.Add(new Entity.Security.Permission("Per 4", "key_4", "desc 4"));
            permissions.Add(new Entity.Security.Permission("Per 5", "key_5", "desc 5"));
            IPermissionService permissionService = IoC.Container.Resolve<IPermissionService>();
            permissionService.CreateIfNotExist(permissions);
        }
    }
}