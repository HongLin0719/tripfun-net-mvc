using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class BookingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
