using App.Common.DI;
using App.Common.Http;
using App.Common.Validation;
using App.Entity.Security;
using App.Service.Security;
using System.Collections.Generic;
using System.Web.Http;

namespace App.Api.Features.Security
{
    [RoutePrefix("api/permissions")]
    public class PermissionsController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IResponseData<IList<PermissionListItem>> GetPermissions()
        {
            IResponseData<IList<PermissionListItem>> response = new ResponseData<IList<PermissionListItem>>();
            try
            {
                IPermissionService perSerivce = IoC.Container.Resolve<IPermissionService>();
                IList<PermissionListItem> items = perSerivce.GetPermissions();
                response.SetData(items);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("{itemId}")]
        [HttpDelete]
        public IResponseData<string> DeletePermissions([FromUri]string itemId)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                IPermissionService perSerivce = IoC.Container.Resolve<IPermissionService>();
                perSerivce.DeletePermission(itemId);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("")]
        [HttpPost]
        public IResponseData<string> CreatePermissions([FromBody]AddOrEditPermissionRequest request)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                IPermissionService perSerivce = IoC.Container.Resolve<IPermissionService>();
                perSerivce.CreatePermission(request);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("{perId}")]
        [HttpGet]
        public IResponseData<Permission> GetPermissionById([FromUri]string perId)
        {
            IResponseData<Permission> response = new ResponseData<Permission>();
            try
            {
                IPermissionService perService = IoC.Container.Resolve<IPermissionService>();
                Permission per = perService.GetPermissionById(perId);
                response.SetData(per);
            }
            catch(ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("")]
        [HttpPut]
        public IResponseData<string> EditPermission([FromBody]AddOrEditPermissionRequest request)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                IPermissionService perService = IoC.Container.Resolve<IPermissionService>();
                perService.EditPermission(request);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }
    }
}
