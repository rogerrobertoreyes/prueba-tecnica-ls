using Microsoft.EntityFrameworkCore;
using back_dynamic_form.Models;

namespace back_dynamic_form.Data
{
    public class FormDbContext : DbContext
    {
        public FormDbContext(DbContextOptions<FormDbContext> options) : base(options) { }

        public DbSet<Formulario> Formularios { get; set; }
        public DbSet<Campo> Fields { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Formulario>().ToTable("Formulario");
            modelBuilder.Entity<Campo>().ToTable("Campo");

            modelBuilder.Entity<Formulario>()
                .HasMany(f => f.Fields)
                .WithOne(c => c.Formulario!)
                .HasForeignKey(c => c.FormularioId);
        }
    }
}
