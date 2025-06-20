using back_dynamic_form.Models;

namespace back_dynamic_form.Data
{
    public static class SeedData
    {
        public static void Initialize(FormDbContext context)
        {
            if (context.Formularios.Any()) return; // ya existe data

            var personas = new Formulario { Nombre = "Personas" };
            personas.Fields.Add(new Campo { Label = "Nombres", Type = "text", Required = true, Orden = 1 });
            personas.Fields.Add(new Campo { Label = "Fecha de nacimiento", Type = "date", Required = true, Orden = 2 });
            personas.Fields.Add(new Campo { Label = "Estatura", Type = "number", Required = false, Orden = 3 });

            var mascotas = new Formulario { Nombre = "Mascotas" };
            mascotas.Fields.Add(new Campo { Label = "Nombre", Type = "text", Required = true, Orden = 1 });
            mascotas.Fields.Add(new Campo { Label = "Especie", Type = "text", Required = true, Orden = 2 });
            mascotas.Fields.Add(new Campo { Label = "Raza", Type = "text", Required = false, Orden = 3 });
            mascotas.Fields.Add(new Campo { Label = "Color", Type = "text", Required = false, Orden = 4 });

            context.Formularios.AddRange(personas, mascotas);
            context.SaveChanges();
        }
    }
}
