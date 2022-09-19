using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    public class Employee : BaseEntity 
    {
        public string Name { get; set; }
        
        public Department Department { get; set; }

        public int DepartmentId { get; set; }

        public string Email { get; set; }

        public DateTime DOJ { get; set; }
    }
}