using System;
using System.Collections.Generic;

namespace AzureCloudApi.Models;

public partial class CloudTable
{
    public int Empid { get; set; }

    public string Name { get; set; } = null!;

    public int Amount { get; set; }

    public string Email { get; set; }
}
