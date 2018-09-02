using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p5001.Models
{
    public class PropUnit
    {
        [Key]
        public string UnitCode {get;set;}

        [ForeignKey("PropId")]
        public Prop Prop{get;set;}
        public int PropId{get;set;}
        public string Floor{get;set;}
        public string Building{get;set;}
    }
}