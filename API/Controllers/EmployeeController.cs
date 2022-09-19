using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmployeeController : BaseApiController
    {
        private readonly IGenericRepository<Employee> _employeeRepository;
        public EmployeeController(IGenericRepository<Employee> employeeRepository)
        {
            _employeeRepository = employeeRepository;
            
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetEmployees()
        {
            return Ok(await _employeeRepository.GetAllAsync());
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetEmployee(int Id)
        {
            return Ok(await _employeeRepository.GetAsync(Id));
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> Post(Employee employee)
        {
            var result = await _employeeRepository.InsertAsync(employee);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Employee employee)
        {
            await _employeeRepository.UpdateAsync(employee);
            return Ok("Updated Successfully");
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(Employee employee)
        {
            await _employeeRepository.DeleteAsync(employee);
            return new JsonResult("Deleted Successfully");
        }
    }
}