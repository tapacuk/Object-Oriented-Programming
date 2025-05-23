using System;
using System.Linq;

namespace Lab2
{
    public class Line
    {
        private string value;

        public Line()
        {
            value = "";
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
            return value.All(c => c >= 'A' && c <= 'Z');
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
