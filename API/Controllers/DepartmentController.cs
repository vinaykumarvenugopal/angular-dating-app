using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.Controllers
{
    public class DepartmentController : BaseApiController
    {
        private readonly IGenericRepository<Department> _departmentRepository;
        public DepartmentController(IGenericRepository<Department> departmentRepository)
        {
            _departmentRepository = departmentRepository;
            
        }
    }
}