using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WebAPI.Services
{
    public class ValidationService
    {
        public bool isNumber(String number)
        {
            int i;
            bool bNum = int.TryParse(number, out i);
            return bNum;
        }

        public bool isValidName(String name)
        {
            string pattern = @"^[A-ZÇÉÂÊÎÔÛÀÈÙËÏÜ]{1}[-ÇÉÂÊÎÔÛÀÈÙËÏÜA-Z' ]*$";   
            Match m = Regex.Match(name.ToUpper(), pattern, RegexOptions.IgnoreCase);
            return m.Success;
        }


    }
}
