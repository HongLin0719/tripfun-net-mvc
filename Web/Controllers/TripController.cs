using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class TripController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
