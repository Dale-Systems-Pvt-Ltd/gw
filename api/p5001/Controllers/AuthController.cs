using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using p5001.Data;
using p5001.Data.Dto;
using p5001.Models;

namespace p5001.Controllers
{
    [Route("api1/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepo;
        private readonly IConfiguration _configuration;

        public AuthController(IAuthRepository authRepo, IConfiguration configuration) { 
            _authRepo = authRepo;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto model) {
            var result = await _authRepo.LoginAsync(model.Email, model.Password);
            if (result.Succeeded) {
                var user = await _authRepo.GetUserAsync(model.Email);
                var token = GenerateJwtToken(user.Email, user.Id);
                return Ok(new {
                    token = token
                });
            }

            return BadRequest();
        }  

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterDto model)
        {
            var result = await _authRepo.RegisterAsync(model);
            if (result.Succeeded) {
                var user = await _authRepo.GetUserAsync(model.Email);
                if (await _authRepo.LoginAsync(user)) {
                    var token = GenerateJwtToken(user.Email, user.Id);                    
                    return Ok(new {
                        token = token
                    });
                }
            }
            return BadRequest();
        }

        private object GenerateJwtToken(string email, string userId)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, userId)
            };
            var secret = Encoding.ASCII.GetBytes( _configuration.GetSection("AppSettings:SecretKey").Value);

            var key = new SymmetricSecurityKey(secret);
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(
                    Convert.ToDouble(
                        _configuration.GetSection("AppSettings:JwtExpireDays").Value
                    )
                );

            // var token = new JwtSecurityToken(
            //     _configuration["JwtIssuer"],
            //     _configuration["JwtIssuer"],
            //     claims,
            //     expires: expires,
            //     signingCredentials: creds
            // );
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = expires,
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
            //return new JwtSecurityTokenHandler().WriteToken(token);
        }

        
    }
}