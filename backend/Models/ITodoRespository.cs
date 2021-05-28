using System;
using System.Collections.Generic;

namespace backend.Models
{
    public interface ITodoRepository
    {
        IEnumerable<Errand> GetAll();

        Errand Add(Errand errand);

        Errand Delete(int Id);

        Errand Update(int Id, Errand errand);
    }
}