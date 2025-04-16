using System;

namespace Lab
{
    public class Line 
    {
        protected string value;

         public Line()
        {
            value = "#DEFAULT";
        }

        public Line(string input)
        {
            value = input;
        }

        public virtual string GetValue()
        {
            return value;
        }

        public virtual int GetLength()
        {
            return value.Length;
        }

        public virtual void Replace() 
        { 

        } 
    }
}