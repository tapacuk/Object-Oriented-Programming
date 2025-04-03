using System;

namespace Lab1
{
  class Program
  {
    static void Main(string[] args)
    {        
        Console.Write("enter line: ");
        string input = Console.ReadLine();
        
        Line lines = new Line(input);

        if (!lines.IsLowercaseLatin())
        {
            Console.WriteLine("your line should have only lowercased latin symbols");
            return;
        }

        Console.WriteLine("line: " + lines.GetValue());
        Console.WriteLine("length: " + lines.GetLength());
        Console.WriteLine("sorted line: " + lines.SortAscending());
    }
  }
}
