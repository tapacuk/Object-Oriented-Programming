using System;

namespace HomeWork
{
    class Program 
    {
        static void Main(string[] args) 
        {
            // Create an instance of the Array class and test its methods
            int[,] arr = {
                { 0, 7, 2, 0 },
                { 2, 0, 1, 2 },
                { 1, 9, 9, 9 }
            };

            Array arrObj = new Array(arr);

            Console.WriteLine("avg of the first line: " + arrObj[0]);
            Console.WriteLine("avg of the second line: " + arrObj[1]);
            Console.WriteLine("avg of the third line: " + arrObj[2]);
            Console.WriteLine("product of all elements: " + arrObj.Product);
        }
    }
}