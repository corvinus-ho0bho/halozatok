using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HajosTeszt.MovieModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        // GET: api/<MovieController>
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            filmekContext context = new filmekContext();
            return context.Movies.ToList();
        }

        // GET api/<MovieController>/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            filmekContext context = new filmekContext();
            var keresettFilm = (from x in context.Movies
                                where x.Id == id
                                select x).FirstOrDefault();
            return keresettFilm;
        }

        // POST api/<MovieController>
        [HttpPost]
        public void Post([FromBody] Movie ujFilm)
        {
            filmekContext context = new filmekContext();
            context.Movies.Add(ujFilm);
            context.SaveChanges();
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            filmekContext context = new filmekContext();
            var torlendoFilm = (from x in context.Movies
                                where x.Id == id
                                select x).FirstOrDefault();
            context.Movies.Remove(torlendoFilm);
            context.SaveChanges();
        }
        // Szamalalo
        [HttpGet]
        [Route("count")]
        public int M1()
        {
            filmekContext context = new filmekContext();
            int db = context.Movies.Count();
            return db;
        }
    }
}
