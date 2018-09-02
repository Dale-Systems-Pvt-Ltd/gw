using System.ComponentModel.DataAnnotations.Schema;

namespace p5001.Models
{
    public class Prop
    {
        public int Id{get;set;}
        public string Name {get;set;}
        public string StreetAddress {get;set;}
        public string Address {get;set;}
        public string City {get;set;}
        public string State{get;set;}
        public string Country {get;set;}
        public string ZipCode{get;set;}

        [ForeignKey("OwnerCompanyId")]
        public Company OwnerCompany{get;set;}
        public int OwnerCompanyId{get;set;}

        [ForeignKey("PropMgrCompanyId")]
        public Company PropMgrCompany{get;set;}
        public int? PropMgrCompanyId{get;set;}
    }
}