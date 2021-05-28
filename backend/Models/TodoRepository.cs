using System;
using System.Collections.Generic;

namespace backend.Models
{
    public class TodoRepository : ITodoRepository
    {
        private List<Errand> tasks = new List<Errand>();
        private int _nextId = 1;

        public TodoRepository()
        {
            Add(new Errand { Title = "Appointment", Description = "Doctor", Date = "Friday" });
            Add(new Errand { Title = "Dinner", Description = "Mom", Date = "Friday" });
            Add(new Errand { Title = "Store", Description = "Grocery", Date = "Sunday" });

        }

        public IEnumerable<Errand> GetAll()
        {
            return tasks;
        }

        public Errand Add(Errand errand)
        {
         
            errand.Id = _nextId++;
            tasks.Add(errand);
            return errand;
        }

        public void Delete(int id)
        {
            tasks.RemoveAll(n => n.Id == id);
        }
        /*
        public void Update(int id, Errand errand) //may need to be changed
        {
            Errand found = tasks.Where(n => n.Id == id).FirstOrDefault();
            found.Title = errand.Title;
            found.Description = errand.Description;
            found.Date = errand.Date;
            
        }*/
    }
}