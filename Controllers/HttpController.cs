using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsProje.Controllers
{
    public class HttpController : Controller
    {
        // GET: Http
        public ActionResult Index()
        {
            return View();
        }
        //get yapabilmek için bu fonksiyonu yazdık
        public ActionResult Test()
        {
            return View();
        }

    }
}