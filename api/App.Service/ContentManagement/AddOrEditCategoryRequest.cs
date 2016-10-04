
namespace App.Service.ContentManagement
{
    public class AddOrEditCategoryRequest
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
    }
}
