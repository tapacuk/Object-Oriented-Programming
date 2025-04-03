using System;

namespace Lab
{
    public class Rectangle : Shapes
    {
        public Rectangle(): base() {}
        public Rectangle(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4): base(x1, y1, x2, y2, x3, y3, x4, y4) {}
    

        public double GetHeight()
        {
            return GetLength(x1, y1, x2, y2);
        }

        public double GetWidth()
        {
            return GetLength(x2, y2, x3, y3);
        }


        public double GetPerimeter()
        {
            return (GetHeight() + GetWidth()) * 2;
        }

        public double GetArea()
        {
            return GetHeight() * GetWidth();
        }
    }
}