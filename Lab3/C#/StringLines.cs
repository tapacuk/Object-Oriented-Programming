using System;

namespace Lab3
{
    public class Line
    {
        private string value;

        public Line()
        {
            value = "DEFAULT";
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


        public static Line operator +(Line a, Line b)
        {
            return new Line(a.GetValue() + b.GetValue());
        }

        public static Line operator /(Line s, int delimiter)
        {
            string newValue = "";
            for (int i = 0; i < s.value.Length; i++)
            {
                if (i % delimiter == 0)
                {
                    newValue += s.value[i];
                }
            }
            return new Line(newValue);
        }

        // public void DeleteEvenChars(string input)
        // {
        //     string result = "";
        //     for (int i = 0; i < input.Length; i++)
        //     {
        //         if (i % 2 != 0)
        //         {
        //             result += input[i];
        //         }
        //     }
        //     value = result;
        // }

        // ~Line()
        // {
        //     Console.WriteLine("object destroyed");
        // }
    }
}