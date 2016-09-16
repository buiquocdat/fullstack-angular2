
namespace App.Service.Security
{
    public class AddOrEditPermissionRequest
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }
    }
}
