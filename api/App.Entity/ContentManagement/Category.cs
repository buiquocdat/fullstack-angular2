
using App.Common.Data;

namespace App.Entity.ContentManagement
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public Category():base() { }
        public Category(string name, string description, bool status): base()
        {
            this.Name = name;
            this.Description = description;
            this.Status = status;
        }
    }
}
