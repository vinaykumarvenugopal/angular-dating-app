using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.Controllers
{
    public class EmployeeController : BaseApiController
    {
        private readonly IGenericRepository<Employee> _employeeRepository;
        public EmployeeController(IGenericRepository<Employee> employeeRepository)
        {
            _employeeRepository = employeeRepository;
            
        }
    }
}