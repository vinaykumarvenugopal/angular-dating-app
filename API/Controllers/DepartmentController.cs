using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DepartmentController : BaseApiController
    {
        private readonly IGenericRepository<Department> _departmentRepository;
        public DepartmentController(IGenericRepository<Department> departmentRepository)
        {
            _departmentRepository = departmentRepository;

        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetDepartments()
        {
            return Ok(await _departmentRepository.GetAllAsync());
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetDepartment(int Id)
        {
            return Ok(await _departmentRepository.GetAsync(Id));
        }

        [HttpPost]
        public async Task<ActionResult<Department>> Post(Department department)
        {
            var result = await _departmentRepository.InsertAsync(department);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Department department)
        {
            await _departmentRepository.UpdateAsync(department);
            return Ok("Updated Successfully");
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(Department department)
        {
            await _departmentRepository.DeleteAsync(department);
            return new JsonResult("Deleted Successfully");
        }
    }
}