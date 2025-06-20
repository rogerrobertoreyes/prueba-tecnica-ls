using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back_dynamic_form.Data;
using back_dynamic_form.Models;

namespace back_dynamic_form.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormulariosController : ControllerBase
    {
        private readonly FormDbContext _context;

        public FormulariosController(FormDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Formulario>>> GetFormularios()
        {
            try
            {
                return await _context.Formularios.ToListAsync();
            }
            catch
            {
                return BadRequest("Error en metodo: GetFormularios");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Formulario>> GetFormulario(int id)
        {
            try
            {
                var formulario = await _context.Formularios
                    .Include(f => f.Fields.OrderBy(c => c.Orden))
                    .FirstOrDefaultAsync(f => f.Id == id);

                if (formulario == null)
                    return NotFound();

                return formulario;
            }
            catch
            {
                return BadRequest("Error en metodo: GetFormulario");
            }
        }
    }
}
