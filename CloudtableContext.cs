using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AzureCloudApi.Models;

public partial class CloudtableContext : DbContext
{
    private IConfiguration Configuration;
    public CloudtableContext()
    {
    }

    public CloudtableContext(DbContextOptions<CloudtableContext> options, IConfiguration _configuration)
        : base(options)
    {
        Configuration = _configuration;
    }

    public virtual DbSet<CloudTable> CloudTables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DatabaseConnection"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CloudTable>(entity =>
        {
            entity.HasKey(e => e.Empid).HasName("PRIMARY");

            entity.ToTable("CloudTable");


            entity.Property(e => e.Empid)
                .ValueGeneratedOnAdd()
                .HasColumnName("EMPID");
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
