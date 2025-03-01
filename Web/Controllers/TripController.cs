using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class TripController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Search()
        {
            return View();
        }
        public IActionResult Input()
        {
            return View();
        }
    }
}
