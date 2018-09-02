using System.ComponentModel.DataAnnotations.Schema;

namespace p5001.Models
{
    public class CompanyUserRole
    {
        public int Id {get;set;}
        public string RoleName {get;set;}

        [ForeignKey("UserId")]
        public ApplicationUser User{get;set;}
        public string UserId{get;set;}

        [ForeignKey("CompanyId")]
        public Company Company {get;set;}
        public int CompanyId {get;set;}

    }
}