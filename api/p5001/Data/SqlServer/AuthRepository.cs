using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using p5001.Data.Dto;
using p5001.Models;

namespace p5001.Data.SqlServer
{
    public class AuthRepository : IAuthRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AuthRepository(UserManager<ApplicationUser> userManager, 
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration)
        {
            _signInManager = signInManager;
            _configuration = configuration;
            _userManager = userManager;

        }
        public async Task<SignInResult> LoginAsync(string userName, string password)
        {
            //throw new System.NotImplementedException();
            return await _signInManager.PasswordSignInAsync(userName, password, true, true);        
        }

        public async Task<IdentityResult> RegisterAsync(RegisterDto model)
        {
            var user = new ApplicationUser{
                Email = model.Email,
                UserName = model.Email.ToLower()
            };

            return await _userManager.CreateAsync(user, model.Password);
        }

        public async Task<ApplicationUser> GetUserAsync(string email) {
            return await _userManager.FindByEmailAsync(email);
        }

        public async Task<bool> LoginAsync(ApplicationUser user){
            await _signInManager.SignInAsync(user, false);
            return true;
        }

        public Task<bool> UserExistsAsync(string userName)
        {
            throw new System.NotImplementedException();
        }

        
    }
}