using System.ComponentModel.DataAnnotations;

namespace p5001.Data.Dto
{
    public class LoginDto
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

    }
}