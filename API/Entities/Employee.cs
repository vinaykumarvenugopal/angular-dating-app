using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public Department Department { get; set; }

        public int DepartmentId { get; set; }

        public string Email { get; set; }

        public DateTime DOJ { get; set; }
    }
}