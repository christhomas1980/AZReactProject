using System;
using System.Collections.Generic;

namespace CloudAppApi.DTO;

public partial class CloudTableDTO
{
    public int Empid { get; }

    public string Name { get; set; } = null!;

    public int Amount { get; set; }

    public string Email { get; set; }
}
