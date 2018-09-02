using System.ComponentModel.DataAnnotations;

namespace p5001.Data.Dto
{
    public class RegisterDto {
        [Required][EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "PASSWORD_MIN_LENGTH", MinimumLength = 6)]
        public string Password { get; set; }
    }
}