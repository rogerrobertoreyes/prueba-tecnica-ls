
namespace back_dynamic_form.Models
{
    public class Formulario
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public ICollection<Campo> Fields { get; set; } = new List<Campo>();
    }
}
