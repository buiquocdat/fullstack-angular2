
using App.Common.DI;
using App.Common.Tasks;
using App.Service.ContentManagement;
using System.Collections.Generic;
using System.Web;
using App.Common;

namespace App.Api.Features.Share.Tasks.Data
{
    public class CreateTestCategory : BaseTask<TaskArgument<System.Web.HttpApplication>>, IApplicationReadyTask<TaskArgument<System.Web.HttpApplication>>
    {
        public CreateTestCategory() : base(ApplicationType.All)
        {
        }

        public override void Execute(TaskArgument<HttpApplication> context)
        {
            IList<Entity.ContentManagement.Category> categories = new List<Entity.ContentManagement.Category>();
            categories.Add(new Entity.ContentManagement.Category("Cat 1", "desc 1", true));
            categories.Add(new Entity.ContentManagement.Category("Cat 2", "desc 2", true));
            categories.Add(new Entity.ContentManagement.Category("Cat 3", "desc 3", true));
            categories.Add(new Entity.ContentManagement.Category("Cat 4", "desc 4", true));
            categories.Add(new Entity.ContentManagement.Category("Cat 5", "desc 5", true));
            ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
            catService.CreateIfNotExist(categories);
        }
    }
}