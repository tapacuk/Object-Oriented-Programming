using System;
using System.Linq;

namespace Lab2
{
    public class Line
    {
        private string value;

        public Line()
        {
            value = "nothen";
        }

        public Line(string input)
        {
            value = input;
        }

        public Line(Line copied)
        {
            value = copied.value;
        }

        public bool IsLowercaseLatin()
        {
            return value.All(c => c >= 'a' && c <= 'z');
        }

        public string GetValue()
        {
            return value;
        }

        public int GetLength()
        {
            return value.Length;
        }

        public string SortAscending()
        {
            value = new string(value.OrderBy(c => c).ToArray());
            return value;
        }

        ~Line()
        {
            Console.WriteLine("object destroyed");
        }
    }
}