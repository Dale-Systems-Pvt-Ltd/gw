using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using p5001.Models;

namespace p5001.Data
{
    public class DataContext: IdentityDbContext<ApplicationUser>
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
            
        }

        public DbSet<Company> Companies {get;set;}
        public DbSet<Prop> Properties{get;set;}
        public DbSet<PropUnit> PropUnits{get;set;}
        public DbSet<CompanyUserRole> CompanyUserRoles{get;set;}

        
    }
}