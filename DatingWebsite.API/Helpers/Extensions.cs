using Microsoft.AspNetCore.Http;

namespace DatingWebsite.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Applicaton-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Applicaton-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        } 
    }
}