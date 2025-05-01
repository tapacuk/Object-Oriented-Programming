using System;
using System.Collections.Generic;

namespace Lab
{
    class Program
    {
        static void Main(string[] args)
        {
            LineContainer line = new LineContainer();

            while (true)
            {
                Console.WriteLine("- - - menu - - -");
                Console.WriteLine("(1) add line");
                Console.WriteLine("(2) remove line");
                Console.WriteLine("(3) clear lines");
                Console.WriteLine("(4) show all lines");
                Console.WriteLine("(5) show char frequency in entire text");
                Console.WriteLine("(6) show shortest line");
                Console.WriteLine("(7) show first char of each line in a string" + "\n");
                Console.WriteLine("(0) exit");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        Console.Write("enter line to add: ");
                        line.AddLine(Console.ReadLine());
                        break;
                    case "2":
                        Console.Write("enter line to remove: ");
                        line.RemoveLine(Console.ReadLine());

                        break;
                    case "3":
                        line.ClearText();
                        Console.WriteLine("all lines cleared");
                        Console.ReadKey();
                        break;
                    case "4":
                        Console.WriteLine("your string: " + line.ShowAllLines());
                        Console.ReadKey();
                        break;
                    case "5":
                        Console.Write("enter char to count frequency: ");
                        char c = Console.ReadKey().KeyChar;
                        Console.WriteLine("\n" + c + " char frequency: " + line.CharFrequency(c));
                        Console.ReadKey();
                        break;
                    case "6":
                        Console.WriteLine("shortest line: " + line.GetShortestLine());
                        Console.ReadKey();
                        break;
                    case "7":
                        Console.WriteLine("first chars string: " + line.BuildFirstChars());
                        Console.ReadKey();
                        break;
                    case "0":
                        return;
                    default:
                        Console.WriteLine("invalid choice");
                        Console.ReadKey();
                        break;
                }

            }
        }
    }

}