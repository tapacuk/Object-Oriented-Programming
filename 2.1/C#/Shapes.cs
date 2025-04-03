using System;

namespace Lab
{
    public class Shapes
    {
        protected double x1, y1, x2, y2, x3, y3, x4, y4;

        public Shapes() => (x1, y1, x2, y2, x3, y3, x4, y4) = (0, 0, 0, 1, 1, 1, 1, 0);
        public Shapes(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4) 
            => (this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4) = (x1, y1, x2, y2, x3, y3, x4, y4);

        public double GetLength(double ax, double ay, double bx, double by)
        {
            return Math.Sqrt(Math.Pow(bx - ax, 2) + Math.Pow(by - ay, 2));
        }
    }
}