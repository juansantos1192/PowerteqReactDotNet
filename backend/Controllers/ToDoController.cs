using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {

        static readonly ITodoRepository repository = new TodoRepository();

        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/tasks")]
        public IEnumerable<Models.Errand> GetAllTasks()
        {
            return repository.GetAll();
        }

        
        [HttpPost]
        [Route("api/errand")]
        [Consumes("application/json")]
        public Models.Errand PostUser(Models.Errand item)
        {
            return repository.Add(item);
        }


    }
}
