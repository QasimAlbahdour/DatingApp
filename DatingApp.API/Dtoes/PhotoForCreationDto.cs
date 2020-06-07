using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtoes
{
    public class PhotoForCreationDto
    {
         public string Url { get; set; }
        public IFormFile File { get; set; } 
        public string Description { get; set; } 
        public DateTime DateAdded { get; set; } 
        public string publicId { get; set; } 

        public PhotoForCreationDto()
        {
            DateAdded =DateTime.Now;
        }
    }
}