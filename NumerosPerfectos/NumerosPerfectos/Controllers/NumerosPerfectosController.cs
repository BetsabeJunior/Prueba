using Microsoft.AspNetCore.Mvc;

namespace NumerosPerfectos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumerosPerfectosController : ControllerBase
    {
        // Betsabe Junior Hoyos Barrios - Desarrollador de Software
        [HttpGet]
        public async Task<IActionResult> GetNumerosPerfectos(long desde, long hasta)
        {
            try
            {
                if (desde <= 0 || hasta <= 0 || desde > hasta)
                {
                    return BadRequest("Los rangos deben ser números positivos y el valor 'desde' debe ser menor o igual que el valor 'hasta'.");
                }

                var numerosPerfectos = await Task.Run(() => NumerosPerfectosFinder.EncontrarNumerosPerfectos(desde, hasta));

                GuardarNumerosPerfectosEnArchivo(numerosPerfectos, "numeros_perfectos.txt");

                return Ok(numerosPerfectos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        private void GuardarNumerosPerfectosEnArchivo(IEnumerable<long> numeros, string archivo)
        {
            System.IO.File.WriteAllLines(archivo, numeros.Select(n => n.ToString()));
        }
    }

    public class NumerosPerfectosFinder
    {
        public static List<long> EncontrarNumerosPerfectos(long desde, long hasta)
        {
            List<long> numerosPerfectos = new List<long>();

            for (long n = desde; n <= hasta; n++)
            {
                if (EsNumeroPerfecto(n))
                {
                    numerosPerfectos.Add(n);
                }
            }

            return numerosPerfectos;
        }

        private static bool EsNumeroPerfecto(long num)
        {
            long sum = 1;

            for (long i = 2; i * i <= num; i++)
            {
                if (num % i == 0)
                {
                    sum += i;
                    if (i * i != num)
                    {
                        sum += num / i;
                    }
                }
            }

            return sum == num && num != 1;
        }
    }
}