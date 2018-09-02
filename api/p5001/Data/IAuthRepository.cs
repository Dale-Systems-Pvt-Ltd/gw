using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using p5001.Data.Dto;
using p5001.Models;

namespace p5001.Data
{
    public interface IAuthRepository
    {
        Task<IdentityResult> RegisterAsync(RegisterDto model);
        Task<SignInResult> LoginAsync(string userName, string password);
        Task<bool> LoginAsync(ApplicationUser user);
        Task<bool> UserExistsAsync(string userName);
        Task<ApplicationUser> GetUserAsync(string email);
    }
}