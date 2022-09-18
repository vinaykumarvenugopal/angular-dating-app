using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities;
using API.Interfaces;

namespace API.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly DataContext _context;
        private DbSet<T> _entities;
        string errorMessage = string.Empty;
        public GenericRepository(DataContext context)
        {
            _context = context;
            _entities = context.Set<T>();

        }
        public async Task<bool> DeleteAsync(T entity)
        {
            _entities.Remove(entity);  
            return await _context.SaveChangesAsync() > 0;  
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _entities.ToListAsync();  
        }

        public async Task<T> GetAsync(int id)
        {
            return await _entities.SingleOrDefaultAsync(s => s.Id == id);
        }

        public async Task<T> InsertAsync(T entity)
        {
            _entities.Add(entity);  
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
           await _context.SaveChangesAsync(); 
        }
    }
}