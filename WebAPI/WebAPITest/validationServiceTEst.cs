using System;
using WebAPI.Services;
using Xunit;

namespace WebAPITest
{
    public class ValidationServiceTest
    {
        private readonly ValidationService validationService;

        public ValidationServiceTest()
        {
            validationService = new ValidationService();
        }

        [Fact]
        public void IsNumberShouldReturnFalseGivenAString()
        {
            var result = validationService.isNumber("abc");
            Assert.False(result, "abc should not be a number");
        }

        [Fact]
        public void IsNumberShouldReturnTrueeGivenANumber()
        {
            var result = validationService.isNumber("10");
            Assert.True(result, "10 should be a number");
        }
        [Fact]
        public void IsValidNameShouldReturnTrueeGivenACharacterString()
        {
            var result = validationService.isValidName("SomeName");
            Assert.True(result, "SomeName should be a valid name");
        }

        [Fact]
        public void IsValidNameShouldReturnFalseGivenAnIntegerString()
        {
            var result = validationService.isValidName("abc1234");
            Assert.False(result, "abc1234 should Not be a valid name");
        }
    }
}
