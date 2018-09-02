using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace p5001.Models
{
    public class ApplicationUser: IdentityUser
    {
        [ForeignKey("CompanyUserRoleId")]
        public CompanyUserRole CompanyUserRole {get;set;}
        public int? CompanyUserRoleId {get;set;}        
    }
}