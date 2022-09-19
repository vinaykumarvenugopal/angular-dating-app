using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Entities
{
    [Index(nameof(Name), IsUnique = true)]
    public class Department : BaseEntity 
    {
        public string Name { get; set; }
    }
}