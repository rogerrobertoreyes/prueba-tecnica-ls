
namespace back_dynamic_form.Models
{
    public class Campo
    {
        public int Id { get; set; }
        public int FormularioId { get; set; }
        public string Label { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty; // text, number, date
        public bool Required { get; set; }
        public int Orden { get; set; }

        public Formulario? Formulario { get; set; }
    }
}
