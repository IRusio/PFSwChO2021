using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;

namespace HistoryService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private static List<HistoryObject> _historyOfResults = new List<HistoryObject>(10);

        [HttpGet]
        public IActionResult GetHistory()
        {
            return Ok(JsonSerializer.Serialize(_historyOfResults));
        }

        [HttpPost]
        public IActionResult AddHistoryObject(int k, int result)
        {
            if (k > 20) return BadRequest("k is too low");
            if (_historyOfResults.Count >= 10)
                _historyOfResults.RemoveAt(0);
            _historyOfResults.Add(new HistoryObject() { K = k, Result = result });
            return Ok();
        }
    }
}


public class HistoryObject
{
    public int K { get; set; }
    public int Result { get; set; }
}
