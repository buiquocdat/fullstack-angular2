using App.Common.DI;
using App.Common.Http;
using App.Common.Validation;
using App.Entity.ContentManagement;
using App.Service.ContentManagement;
using System.Collections.Generic;
using System.Web.Http;

namespace App.Api.Features.ContentManagement
{
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IResponseData<IList<CategoryListItem>> GetCategoies()
        {
            IResponseData<IList<CategoryListItem>> response = new ResponseData<IList<CategoryListItem>>();
            try
            {
                ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
                IList<CategoryListItem> items = catService.GetCategories();
                response.SetData(items);
            }
            catch(ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("{itemId")]
        [HttpDelete]
        public IResponseData<string> DeleteCategory([FromUri] string itemId)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
                catService.DeleteCategory(itemId);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("{itemId}")]
        [HttpGet]
        public IResponseData<Category> GetCategoryById([FromUri] string itemId)
        {
            IResponseData<Category> response = new ResponseData<Category>();
            try
            {
                ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
                Category cat = catService.GetCategoryById(itemId);
                response.SetData(cat);
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
        public IResponseData<string> CreateCategory([FromBody] AddOrEditCategoryRequest request)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
                catService.CreateCategory(request);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }
            return response;
        }

        [Route("")]
        [HttpPut]
        public IResponseData<string> EditCategory([FromBody] AddOrEditCategoryRequest request)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                ICategoryService catService = IoC.Container.Resolve<ICategoryService>();
                catService.EditCategory(request);
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
