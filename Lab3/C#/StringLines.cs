using System;
using System.Linq;

namespace Lab3
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

        public Line(Line copiedObj)
        {
            value = copiedObj.value;
        }

        public bool IsUppercaseLatin()
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

        public void DeleteEvenChars(string input)
        {
            string result = "";
            for (int i = 0; i < input.Length; i++)
            {
                if (i % 2 != 0)
                {
                    result += input[i];
                }
            }
            value = result;
        }

        public static Line operator +(Line a, Line b)
        {
            return new Line(a.GetValue() + b.GetValue());
        }

        ~Line()
        {
            Console.WriteLine("object destroyed");
        }
    }
}