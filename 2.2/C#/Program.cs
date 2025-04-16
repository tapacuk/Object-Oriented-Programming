using System;

namespace Lab
{
    class Program 
    {
        static void Main(string[] args) 
        {
            string inputSymbol = "!#;!%$#%^&*(#)_+|#~`";
            string inputNumber = "019473608702638495";

            Symbols objSym = new Symbols(inputSymbol);
            objSym.Replace();
            Numbers objNum = new Numbers(inputNumber);
            objNum.Replace();
            
            Console.WriteLine("symbols value: " + objSym.GetValue());
            Console.WriteLine("symbols length: " + objSym.GetLength());

            Console.WriteLine("numbers value: " + objNum.GetValue());
            Console.WriteLine("numbers length: " + objNum.GetLength());
        }
    }
}