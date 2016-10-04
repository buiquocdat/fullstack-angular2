
using App.Common.Data;
using App.Common.Mapping;
using App.Entity.ContentManagement;

namespace App.Service.ContentManagement
{
    public class CategoryListItem : BaseEntity, IMappedFrom<Category>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
    }
}
