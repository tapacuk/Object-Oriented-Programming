using System;

namespace Lab
{
    class Program 
    {
        static void Main(string[] args) {

            Rectangle rectDef = new Rectangle();
            Rectangle rectSet = new Rectangle(5, 4,   5, 20,   20, 20,   20, 4);

            Console.WriteLine("first rectangle (by default)");
            Console.WriteLine("heigth and width: " + rectDef.GetHeight() + ", " + rectDef.GetWidth());
            Console.WriteLine("area of rectangle: " + rectDef.GetArea());
            Console.WriteLine("perimeter of rectangle: " + rectDef.GetPerimeter() + '\n');

            Console.WriteLine("second rectangle ");
            Console.WriteLine("heigth and width: " + rectSet.GetHeight() + ", " + rectSet.GetWidth());
            Console.WriteLine("area of rectangle: " + rectSet.GetArea());
            Console.WriteLine("perimeter of rectangle: " + rectSet.GetPerimeter() + '\n');
        }
    }
}