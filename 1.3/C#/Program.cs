using System;

namespace Lab3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("enter R2 line: ");
            string R2 = Console.ReadLine();
            Console.Write("enter R3 line: ");
            string R3 = Console.ReadLine();

            Line firstLine = new Line(); // R1
            Line secondLine = new Line(R2);
            Line thirdLine = new Line(R3);
    
            if (!secondLine.IsUppercaseLatin())
            {
                Console.WriteLine("error in R2 line: your line should have only uppercased latin symbols");
                return;
            }
            if (!thirdLine.IsUppercaseLatin())
            {
                Console.WriteLine("error in R3 line: your line should have only uppercased latin symbols");
                return;
            }

            // secondLine.DeleteEvenChars(R2);
            secondLine = secondLine / 2;
            firstLine = secondLine + thirdLine;

            if (firstLine.GetLength() > 0)
            {
                Console.WriteLine("R1 line: " + firstLine.GetValue());
                Console.WriteLine("R1 length: " + firstLine.GetLength());
            } else
            {
                Console.WriteLine("R1 is empty. (R2 and R3 are both empty strings)");
            }
        }
    }
}
