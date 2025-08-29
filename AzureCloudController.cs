using AzureCloudApi.Models;
using CloudAppApi.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AzureCloudApi.Controllers
{
    [ApiController]
    [Route("api/v1/")]
    public class AzureCloudController : Controller
    {
        CloudtableContext _modelContext;


        public AzureCloudController(CloudtableContext modelContext)
        {
            _modelContext = modelContext;

        }
        //GET owner
        [HttpGet("CloudOwner")]
        public async Task<ActionResult<List<CloudTableDTO>>> GetAllOwners()
        {
            try
            {
                var dd = await _modelContext.CloudTables.Select(x => x).ToListAsync();
                return Ok(new { data = dd });
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
            }
        }

        //GET owner
        [HttpGet("CloudOwner/owner-name/{ownerName}")]
        public async Task<ActionResult<List<CloudTableDTO>>> GetOwner(string? ownerName)
        {
            try
            {
                var dd = await _modelContext.CloudTables.Where(n => n.Name == ownerName).Select(x => x).ToListAsync();
                return Ok(new { data = dd });
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
            }
        }

        ////Post owner
        //[HttpPost("owner/owner-name/{ownerName}")]
        //public  IActionResult GetOwner([FromBody]Lreact nowOwner)
        //{
        //    try
        //    {
        //        if(nowOwner == null)
        //        {
        //            return BadRequest();
        //        }
        //        var newLReact = new Lreact
        //        {
        //            Owner = nowOwner.Owner,
        //            Carmodel = nowOwner.Carmodel,
        //            Speed = nowOwner.Speed
        //        };

        //        var idIncrement =  _modelContext.Lreacts.Max(item => item.Ownerid) + 1;
        //        newLReact.Ownerid = idIncrement;
        //        _modelContext.Add(newLReact);


        //        return CreatedAtAction(
        //            nameof(GetOwner),
        //            new { Owner = newLReact.Owner },newLReact);

        //    }
        //    catch (Exception ex)
        //    {

        //        return StatusCode(500, ex.Message);
        //    }
        //}


        [HttpPost("CloudOwner/owner-name/")]
        public async Task<ActionResult<CloudTable>> PostOwner(CloudTable nowOwner)
        {
            var newCloudTable = new CloudTable
            {
                Name = nowOwner.Name,
                Amount = nowOwner.Amount,
                Email = nowOwner.Email

            };

            //var idIncrement = _modelContext.CloudTables.Max(item => item.Empid) + 1;
            //  newCloudTable. = idIncrement;
            _modelContext.CloudTables.Add(newCloudTable);
            await _modelContext.SaveChangesAsync();

            //    return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetOwner), new { ownerName = newCloudTable.Name }, newCloudTable);
        }


        [HttpPut("CloudOwner/owner-name/")]
        public async Task<ActionResult<CloudTable>> PutOwner(int ownerID, CloudTable nowOwner)
        {
            if (nowOwner == null)
            {
                return BadRequest();
            }

            var cloudOwner = await _modelContext.CloudTables.FindAsync(ownerID);
            if (cloudOwner == null)
            {
                return NotFound();
            }

            cloudOwner.Name = nowOwner.Name;
            cloudOwner.Amount = nowOwner.Amount;
           // cloudOwner.Email = nowOwner.Email;

            try
            {
                await _modelContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!_modelContext.CloudTables.Any(e => e.Name == cloudOwner.Name))
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("CloudOwner/owner-name/")]
        public async Task<IActionResult> DeleteOwner(int ownerID)
        {

            var lReactItem = await _modelContext.CloudTables.FindAsync(ownerID);
            if (lReactItem == null)
            {
                return NotFound();
            }

            _modelContext.CloudTables.Remove(lReactItem);
            await _modelContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
